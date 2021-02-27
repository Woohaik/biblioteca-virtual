import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';


@injectable()
export class UserService implements IUserService {

    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) { }

    private userStorage: IUser[] = [{
        id: "1",
        password: "1",
        email: 'lorem@ipsum.com',
        name: 'Lorem'
    }, {
        id: "1",
        password: "1",
        email: 'doloe@sit.com',
        name: 'Dolor'
    }];

    public getUsers(): IUser[] {
        return this.userStorage;
    }

    public async getUser(id: string): Promise<IUser | undefined> {
        return await this.userRepository.getById(+id)
    }
}