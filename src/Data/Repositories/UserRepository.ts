import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Usuario } from "../../Entities/Usuario"
import { ConfirmEmails } from "../../Entities/ConfirmedEmail"

@injectable()
export class UserRepository implements IUserRepository {

    private userConnection: Repository<Usuario>;
    private emailConnection: Repository<ConfirmEmails>;

    constructor() {
        const conn = getConnection();
        this.userConnection = conn.getRepository(Usuario);
        this.emailConnection = conn.getRepository(ConfirmEmails);
    }
    async getAll(): Promise<IUser[]> {
        return await this.userConnection.find()
    }

    async getByEmail(email: string): Promise<IUser | undefined> {
        return await this.userConnection.findOne(undefined, { where: { Email: email } })
    }

    async edit(id: number, entity: IUser): Promise<void> {
        console.log(id, entity);

    }
    async delete(id: number): Promise<void> {
        await this.userConnection.delete(id);
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
            LastName: entity.LastName
        });
    }


    async getConfirmationEmail(confirmMailId: string): Promise<string | undefined> {
        let encontrado = await this.emailConnection.findOne(confirmMailId)
        return encontrado?.email
    }

    async saveEmailValidate(id: string, email: string): Promise<void> {
        await this.emailConnection.insert({
            ID: id,
            email
        })
    }

    async confirmEmail(userId: number, confirmMailId: string): Promise<void> {
        await this.emailConnection.delete({ ID: confirmMailId })
        await this.userConnection.update({ ID: userId }, { ConfirmedEmail: true })
    }
}