"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const Config_1 = require("./../../Config");
const ResponseDto_1 = require("./../Dtos/ResponseDto");
const BookDto_1 = require("./../Dtos/BookDto");
const ErrorDto_1 = require("../Dtos/ErrorDto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            let books = yield this.bookService.getAllBooks();
            let mappedBooks = books.map((book) => {
                return new BookDto_1.BookDto(book);
            });
            return new ResponseDto_1.ResponseDto([], {
                books: mappedBooks
            });
        });
    }
    getBooksById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let books = yield this.bookService.getById(id);
            return new ResponseDto_1.ResponseDto([], {
                books: books
            });
        });
    }
    getBooksByAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            let books = yield this.bookService.getByAuthor(author);
            return new ResponseDto_1.ResponseDto([], {
                books: books
            });
        });
    }
    getBooksByGenre(genre) {
        return __awaiter(this, void 0, void 0, function* () {
            let books = yield this.bookService.getByGenre(genre);
            return new ResponseDto_1.ResponseDto([], {
                books: books
            });
        });
    }
    getBooksByEditorial(editorial) {
        return __awaiter(this, void 0, void 0, function* () {
            let books = yield this.bookService.getByEditorial(editorial);
            return new ResponseDto_1.ResponseDto([], {
                books: books
            });
        });
    }
    register(newBook) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.bookService.addBook(newBook);
                return new ResponseDto_1.ResponseDto([], {
                    message: "Libro Agregado"
                });
            }
            catch (error) {
                return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", error.message)], {});
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookService.deleteBook(id);
            return new ResponseDto_1.ResponseDto([], {
                message: "Libro Eliminado"
            });
        });
    }
    update(id, newBook) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookService.updateBook(id, newBook);
            return new ResponseDto_1.ResponseDto([], {
                message: "Libro Modificado"
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooks", null);
__decorate([
    inversify_express_utils_1.httpGet("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooksById", null);
__decorate([
    inversify_express_utils_1.httpGet("/author/:author"),
    __param(0, inversify_express_utils_1.requestParam("author")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooksByAuthor", null);
__decorate([
    inversify_express_utils_1.httpGet("/genre/:genre"),
    __param(0, inversify_express_utils_1.requestParam("genre")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooksByGenre", null);
__decorate([
    inversify_express_utils_1.httpGet("/editorial/:editorial"),
    __param(0, inversify_express_utils_1.requestParam("editorial")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooksByEditorial", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "register", null);
__decorate([
    inversify_express_utils_1.httpDelete("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
__decorate([
    inversify_express_utils_1.httpPost("/updateBook/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")), __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "update", null);
BookController = __decorate([
    inversify_express_utils_1.controller('/api/book'),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.BookService)),
    __metadata("design:paramtypes", [Object])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=BookController.js.map