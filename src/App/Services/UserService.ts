import { inject, injectable } from 'inversify';
import { INVERSIFY_TYPES } from './../../Config';
import { hashPassword, confirmEmailTemplate, generateUniqueId, userConfirmedToAdminTemplate, comparePassword } from './../utils';
import { MailService } from "./MailService";
import { UserObservator } from "./../../Entities/UserObservator";

@injectable()
export class UserService implements IUserService, Subject {

    private observadores: Observer[] = [];
    constructor(@inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository) {
        this.registerObserver(new UserObservator("wilfredo.hernandez@alumnos.uneatlantico.es", "marta", "gestor"));
    }

    async loginUser(Email: string, Password: string): Promise<IUser> {
   
        
        const user = await this.userRepository.getByEmail(Email);
        console.log(user);
        
        if (!user) {
            throw new Error("Usuario no encontrado!")
        }
        const isPasswordGood = comparePassword(user.Password, Password);
        if (!isPasswordGood) throw new Error("Invalid Password");
        return user;
    }


    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }

    async getAllUser(): Promise<IUser[]> {
        return await this.userRepository.getAll()
    }

    async getById(id: number): Promise<IUser | undefined> {
        return await this.userRepository.getById(id);
    }

    async confirmEmail(emailId: string): Promise<void> {
        console.log(emailId);
        let toConfirmEmail = await this.userRepository.getConfirmationEmail(emailId);
        if (toConfirmEmail) {
            let user = await this.userRepository.getByEmail(toConfirmEmail)
            if (user) {
                await this.userRepository.confirmEmail(user.ID, emailId);
                this.notifyObserver(userConfirmedToAdminTemplate(`${user.Name} ${user.LastName}`));
            }
        }
    }

    async registerUser(newUser: IUser): Promise<void> {
        // Confirmar qe no exista
        const lastUser = await this.userRepository.getByEmail(newUser.Email);
        if (lastUser) {
            throw new Error("Email Tomado");

        }

        newUser.Password = await hashPassword(newUser.Password);

        await this.userRepository.save(newUser);

        let confirmEmailId: string = generateUniqueId();

        await this.userRepository.saveEmailValidate(confirmEmailId, newUser.Email);

        await MailService.sendEmail(newUser.Email, confirmEmailTemplate(confirmEmailId)); // Mandar a confirmar al usuario.

    }

    /////////////// El observado
    registerObserver(observer: Observer): void {
        this.observadores.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observadores.splice(this.observadores.findIndex(ob => ob === observer), 1);
    }

    notifyObserver(template: EmailTemplate): void {
        this.observadores.forEach(observers => observers.update(template));
    }

}