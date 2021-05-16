"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
class BookDto {
    constructor(book) {
        this.ID = book.ID;
        this.Name = book.Name;
        this.Author = book.Author;
        this.PublicationYear = book.PublicationYear;
        this.Genre = book.Genre;
        this.Editorial = book.Editorial;
        this.ISBN = book.ISBN;
        this.Rate = book.Rate;
        this.Synopsis = book.Synopsis;
    }
}
exports.BookDto = BookDto;
//# sourceMappingURL=BookDto.js.map