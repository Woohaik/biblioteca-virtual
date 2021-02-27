import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { User } from "../Entities/User"

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

    async save(entity: IUser): Promise<IUser | undefined> {
        console.log(entity);
        
  

        console.log(      await this.userConnection.insert({
            email: entity.email,
            name: entity.name,
            password: entity.password,
        }));
        

        return undefined;
    }
}
