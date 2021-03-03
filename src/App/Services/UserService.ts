import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';
import { hashPassword, sendEmail, confirmEmailTemplate, generateUniqueId } from '../utils';

@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) { }
    
    async getAllUser(): Promise<IUser[]> {
        return await this.userRepository.getAll()
    }

    async getById(): Promise<IUser> {
        throw new Error('Method not implemented.');
    }

    async confirmEmail(emailId: string): Promise<void> {
        let toConfirmEmail = await this.userRepository.getConfirmationEmail(emailId)
        if (toConfirmEmail) {
            let user = await this.userRepository.getByEmail(toConfirmEmail)
            if (user) {
                await this.userRepository.confirmEmail(user.ID, emailId)
            }
        }
    }

    async registerUser(newUser: IUser): Promise<void> {
        newUser.Password = await hashPassword(newUser.Password)
        await this.userRepository.save(newUser)
        let confirmEmailId: string = generateUniqueId();
        await this.userRepository.saveEmailValidate(confirmEmailId, newUser.Email)
        await sendEmail(newUser.Email, confirmEmailTemplate(confirmEmailId))
    }
}