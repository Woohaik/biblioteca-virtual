import { injectable } from 'inversify';


@injectable()
export class UserService {

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

    public getUser(id: string): IUser {
        let result: IUser;

        this.userStorage.map(user => {
            if (user.name === id) {
                result = user;
            }
        });
        result = this.userStorage[0]

        return result;
    }


}