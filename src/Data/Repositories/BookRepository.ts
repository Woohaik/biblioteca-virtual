import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Libro } from "../../Entities/Libro"

@injectable()
export class BookRepository implements IBookRepository {
    private bookConnection: Repository<Libro>;
    constructor() {
        const conn = getConnection();
        this.bookConnection = conn.getRepository(Libro);
    }
    
    edit(id: number, entity: IBook): Promise<void> {
        console.log(id);
        console.log(entity);
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        console.log(id);

        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<IBook | undefined> {
        return await this.bookConnection.findOne(id)
    }

    async save(entity: IBook): Promise<void> {
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
}
