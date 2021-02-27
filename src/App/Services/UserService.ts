import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';


@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) { }

    async registerUser(newUser: IUser): Promise<IUser | undefined> {
        return await this.userRepository.save(newUser)
    }

    public async getUser(id: number): Promise<IUser | undefined> {
        return await this.userRepository.getById(id)
    }
}