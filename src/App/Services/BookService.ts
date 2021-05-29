import { INVERSIFY_TYPES } from '../../Config';
import { inject, injectable } from 'inversify';
import { BookObservator } from "./../../Entities/BookObservator";
// import { confirmEmailTemplate, generateUniqueId } from '../utils';
import { MailService } from './MailService';
import { confirmBookTemplate } from '../utils/email/confirmBookTemplate';
// import { UserObservator } from './../../Entities/UserObservator';

@injectable()
export class BookService implements IBookService, Subject {

    private observadores: Observer[] = [];
    private observatorEmail = "martha.marquez@alumnos.uneatlantico.es";
    constructor(@inject(INVERSIFY_TYPES.BookRepository) private bookRepository: IBookRepository) { 
        this.registerObserver(new BookObservator(this.observatorEmail, "Prueba", "La Ceiba"));
    }
    
    async getAllBooks(): Promise<IBook[]> {
        return await this.bookRepository.getAll()
    }

    async getById(id: number): Promise<IBook | undefined> {
        return await this.bookRepository.getById(id);
    }
    
    async addBook(newBook: IBook): Promise<void> {
        // Confirmar qe no exista
        const lastBook = await this.bookRepository.getByName(newBook.Name);
        if (lastBook) {
            throw new Error("El libro que desea agregar ya existe.");
        } 
        
        await this.bookRepository.save(newBook);
        await MailService.sendEmail(this.observatorEmail, confirmBookTemplate(newBook)); // Mandar a confirmar al usuario.
    }

    async updateBook(id: number, book: IBook): Promise<void> {
        await this.bookRepository.edit(id, book)
    }

    async deleteBook(id: number): Promise<void> {
        await this.bookRepository.delete(id)
    }
    
    
    // Objeto Observado
    registerObserver(observer: Observer): void {
        this.observadores.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observadores.splice(this.observadores.findIndex(ob => ob === observer), 1);
    }

    notifyObserver(template: EmailTemplate): void {
        this.observadores.forEach(observers => observers.update(template));
    }
}