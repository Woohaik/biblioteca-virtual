import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Libro } from "../../Entities/Libro";

@injectable()
export class BookRepository implements IBookRepository {
    private bookConnection: Repository<Libro>;

    constructor() {
        const conn = getConnection();
        this.bookConnection = conn.getRepository(Libro);
    }
    
    async save(entity: IBook): Promise<void> {
        console.log(entity);
        
        await this.bookConnection.insert({
            Name: entity.Name,
            Author: entity.Author,
            Genre: entity.Genre,
            Rate: entity.Rate,
            PublicationYear: entity.PublicationYear,
            ISBN: entity.ISBN,
            Editorial: entity.Editorial,
            Synopsis: entity.Synopsis
        });
    }

    async getAll(): Promise<IBook[]> {
        return await this.bookConnection.find()
    }

    async getByName(name: string): Promise<IBook | undefined> {
        return await this.bookConnection.findOne(undefined, { where: { Name: name } })
    }
    
    async getById(id: number): Promise<IBook | undefined> {
        return await this.bookConnection.findOne(id)
    }
    
    async edit(id: number, entity: IBook): Promise<void> {
        console.log(id);
        await this.bookConnection.update(id, {
            Name: entity.Name,
            Author: entity.Author,
            PublicationYear: entity.PublicationYear,
            Genre: entity.Genre,
            Rate: entity.Rate,
            ISBN: entity.ISBN,
            Editorial: entity.Editorial,
            Synopsis: entity.Synopsis
        })
    }
    
    async delete(id: number): Promise<void> {
        console.log(id);
        await this.bookConnection.delete(id);
    }

    

    
    //Obtiene los id de los correos confirmados
    // async getConfirmationEmail(confirmMailId: string): Promise<string | undefined> {
    //     let encontrado = await this.emailConnection.findOne(confirmMailId)
    //     return encontrado?.email
    // }

    //Ingresa el correo que ya ha sido confirmado a la entidad de Confirmed Emails
    // async saveEmailValidate(id: string, email: string): Promise<void> {
    //     await this.emailConnection.insert({
    //         ID: id,
    //         email
    //     })
    // }

    // async confirmEmail(bookId: number, confirmMailId: string): Promise<void> {
    //     await this.emailConnection.delete({ ID: confirmMailId })
    //     await this.bookConnection.update({ ID: bookId }, { ConfirmedEmail: true })
    // }
}
