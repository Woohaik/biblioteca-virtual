"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
var BookDto = (function () {
    function BookDto(book) {
        this.Name = book.Name;
        this.Author = book.Author;
        this.PublicationYear = book.PublicationYear;
        this.Genre = book.Genre;
        this.Editorial = book.Editorial;
        this.ISBN = book.ISBN;
        this.Rate = book.Rate;
        this.Synopsis = book.Synopsis;
    }
    return BookDto;
}());
exports.BookDto = BookDto;
//# sourceMappingURL=BookDto.js.map