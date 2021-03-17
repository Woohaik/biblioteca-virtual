import { inject, injectable } from 'inversify';
import { INVERSIFY_TYPES } from './../../Config';
import { hashPassword, confirmEmailTemplate, generateUniqueId, userConfirmedToAdminTemplate } from './../utils';
import { MailService } from "./MailService";
import { UserObservator } from "./../../Entities/UserObservator";

@injectable()
export class UserService implements IUserService, Subject {

    private observadores: Observer[] = [];
    constructor(@inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository) {
        this.registerObserver(new UserObservator("martha.marquez@alumnos.uneatlantico.es", "marta", "gestor"));
        this.registerObserver(new UserObservator("wilfredo.hernandez@alumnos.uneatlantico.es", "marta", "gestor"));
    }

    async getAllUser(): Promise<IUser[]> {
        return await this.userRepository.getAll()
    }

    async getById(): Promise<IUser> {
        throw new Error('Method not implemented.');
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