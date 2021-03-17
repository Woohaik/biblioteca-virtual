import { INVERSIFY_TYPES } from '../../Config';
import { inject, injectable } from 'inversify';

@injectable()
export class BookService implements IBookService {
    constructor(@inject(INVERSIFY_TYPES.BookRepository) private bookRepository: IBookRepository) { }

    async getAllBooks(): Promise<IBook[]> {
        return await this.bookRepository.getAll()
    }

    async addBook(newBook: IBook): Promise<void> {
        await this.bookRepository.save(newBook);

    }

}