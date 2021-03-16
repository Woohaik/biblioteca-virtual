import {
    controller,
    httpGet,
    httpPost,
    requestBody,
    response
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Response } from 'express';
import { TYPES } from "./../../Config/constants"
import { ResponseDto } from "./../Dtos/ResponseDto"
import { BookDto } from './../Dtos/BookDto';

@controller('/api/book')
export class BookController {
    constructor(@inject(TYPES.BookService) private bookService: IBookService) { }
    @httpGet("/")
    public async getBooks(
        @response() _: Response
    ): Promise<ResponseDto> {
        let books = await this.bookService.getAllBooks();
        let mappedBooks = books.map((book) => {
            return new BookDto(book)
        });
        return new ResponseDto([], {
            books: mappedBooks
        })
    }

    @httpPost("/")
    public async register(
        @response() _: Response,
        @requestBody() newBook: IBook
    ): Promise<ResponseDto> {
        await this.bookService.addBook(newBook);
        return new ResponseDto([], {
            message: "Libro Agregado"
        })
    }
}