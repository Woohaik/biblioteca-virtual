import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { User } from "../../Models/User"

@injectable()
export class UserRepository implements IUserRepository {
    private userConnection: Repository<User>;
    constructor() {
        const conn = getConnection();
        this.userConnection = conn.getRepository(User);
    }
    async getById(id: number): Promise<IUser | undefined> {
        return await this.userConnection.findOne(id)
    }

    save(entity: IUser): Promise<IUser | undefined> {
        console.log(entity);
        throw new Error("Method not implemented.");
    }
}
