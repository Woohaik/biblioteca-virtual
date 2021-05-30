import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    interfaces,
    requestBody,
    requestParam,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { INVERSIFY_TYPES } from "./../../Config";
import { ResponseDto } from "./../Dtos/ResponseDto"
import { BookDto } from './../Dtos/BookDto';
import { ErrorDto } from '../Dtos/ErrorDto';

@controller('/api/book')
export class BookController implements interfaces.Controller {
    constructor(@inject(INVERSIFY_TYPES.BookService) private bookService: IBookService) { }


    @httpGet("/")
    public async getBooks(): Promise<ResponseDto> {
        let books = await this.bookService.getAllBooks();
        let mappedBooks = books.map((book) => {
            return new BookDto(book)
        });
        return new ResponseDto([], {
            books: mappedBooks
        })
    }

    @httpGet("/:id")
    public async getBooksById(@requestParam("id") id: number): Promise<ResponseDto> {
        let books = await this.bookService.getById(id);
        return new ResponseDto([], {
            books: books
        })
    }

    @httpGet("/author/:author")
    public async getBooksByAuthor(@requestParam("author") author: string): Promise<ResponseDto> {
        let books = await this.bookService.getByAuthor(author);
        return new ResponseDto([], {
            books: books
        })
    }

    @httpGet("/genre/:genre")
    public async getBooksByGenre(@requestParam("genre") genre: string): Promise<ResponseDto> {
        let books = await this.bookService.getByGenre(genre);
        return new ResponseDto([], {
            books: books
        })
    }

    @httpGet("/editorial/:editorial")
    public async getBooksByEditorial(@requestParam("editorial") editorial: string): Promise<ResponseDto> {
        let books = await this.bookService.getByEditorial(editorial);
        return new ResponseDto([], {
            books: books
        })
    }

    @httpPost("/")
    public async register(@requestBody() newBook: IBook): Promise<ResponseDto> {
        try{
            await this.bookService.addBook(newBook);
            return new ResponseDto([], {
                message: "Libro Agregado"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("Modal", error.message)], {})
        }
    }

    @httpDelete("/:id")
    public async deleteBook(@requestParam("id") id: number): Promise<ResponseDto> {
        await this.bookService.deleteBook(id);
        return new ResponseDto([], {
            message: "Libro Eliminado"
        })
    }

    @httpPost("/updateBook/:id")
    public async update(@requestParam("id") id: number, @requestBody() newBook: IBook): Promise<ResponseDto> {
        await this.bookService.updateBook(id, newBook);
        return new ResponseDto([], {
            message: "Libro Modificado"
        })
    }
}