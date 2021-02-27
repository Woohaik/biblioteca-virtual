import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';
import { hashPassord } from '../utils/PasswordCriptBcrip';



@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) { }
    async registerUser(newUser: IUser): Promise<void> {
        newUser.Password = await hashPassord(newUser.Password)
        return await this.userRepository.save(newUser)
    }

}