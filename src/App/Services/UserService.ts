import { inject, injectable } from 'inversify';
import { INVERSIFY_TYPES } from './../../Config';
import { hashPassword, confirmEmailTemplate, generateUniqueId } from './../utils';
import { MailService } from "./MailService"

@injectable()
export class UserService implements IUserService, Subject {

    private observadores: Observer[];
    constructor(@inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository) { }

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
                console.log("wardame");

                await this.userRepository.confirmEmail(user.ID, emailId)
            }
        }
    }

    async registerUser(newUser: IUser): Promise<void> {
        newUser.Password = await hashPassword(newUser.Password)
        await this.userRepository.save(newUser)
        let confirmEmailId: string = generateUniqueId();
        await this.userRepository.saveEmailValidate(confirmEmailId, newUser.Email)
        await new MailService().sendEmail(newUser.Email, confirmEmailTemplate(confirmEmailId));
    }



    /////////////// El observado
    registerObserver(observer: Observer): void {
        this.observadores.push(observer);
    }
    removeObserver(observer: Observer): void {
        this.observadores.splice(this.observadores.findIndex(ob => ob === observer), 1);
    }
    notifyObserver(): void {
        this.observadores.forEach(observers => observers.update());
    }

}