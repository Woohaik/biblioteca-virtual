import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Usuario } from "../Entities/Usuario"

@injectable()
export class UserRepository implements IUserRepository {
    private userConnection: Repository<Usuario>;
    constructor() {
        const conn = getConnection();
        this.userConnection = conn.getRepository(Usuario);
    }
    async getById(id: number): Promise<IUser | undefined> {
        return await this.userConnection.findOne(id)
    }

    async save(entity: IUser): Promise<void> {
        console.log(entity);

        await this.userConnection.insert({
            Email: entity.Email,
            Name: entity.Name,
            Password: entity.Password,
        });

    }
}
