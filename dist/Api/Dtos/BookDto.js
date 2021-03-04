"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
class BookDto {
    constructor(book) {
        this.Nombre = book.Nombre;
        this.Autor = book.Autor;
        this.Anio = book.Anio;
        this.Genero = book.Genero;
        this.Editorial = book.Editorial;
        this.ISBN = book.ISBN;
        this.Calificacion = book.Calificacion;
        this.Sinopsis = book.Sinopsis;
    }
}
exports.BookDto = BookDto;
//# sourceMappingURL=BookDto.js.map