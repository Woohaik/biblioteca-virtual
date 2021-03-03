import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';

@injectable()
export class BookService implements IBookService {
    constructor(@inject(TYPES.BookRepository) private bookRepository: IBookRepository) { }

    async getAllBooks(): Promise<IBook[]> {
        return await this.bookRepository.findAll()
    }  

}