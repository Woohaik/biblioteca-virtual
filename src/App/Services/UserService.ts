import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';
import { hashPassword } from '../utils/PasswordCriptBcrip';
import { sendEmail } from '../utils/EmailSender';
import { confirmEmailTemplate } from '../utils/emailTemplates/confirmEmailTemplate';





@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) { }
    async registerUser(newUser: IUser): Promise<void> {
        newUser.Password = await hashPassword(newUser.Password)
        await this.userRepository.save(newUser)
        await sendEmail(newUser.Email, confirmEmailTemplate("Soy El link"))
        // mandar correo de confirmaciones
    }
}