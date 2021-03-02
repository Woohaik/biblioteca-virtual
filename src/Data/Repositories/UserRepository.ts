import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Usuario } from "../../Entities/Usuario"

@injectable()
export class UserRepository implements IUserRepository {
    private userConnection: Repository<Usuario>;
    constructor() {
        const conn = getConnection();
        this.userConnection = conn.getRepository(Usuario);
    }

    async getByEmail(id: number): Promise<IUser | undefined> {
        return await this.userConnection.findOne(id)
    }

    async edit(id: number, entity: IUser): Promise<void> {
        console.log(id, entity);

    }
    async delete(id: number): Promise<void> {
        console.log(id);
    }

    async getById(id: number): Promise<IUser | undefined> {
        return await this.userConnection.findOne(id)
    }

    async save(entity: IUser): Promise<void> {
        await this.userConnection.insert({
            Email: entity.Email,
            Name: entity.Name,
            Password: entity.Password,
            Username: entity.Username,
            ConfirmedEmail: false,
            LastName: entity.LastName,
            RefreshToken: ""
        });

    }
}
