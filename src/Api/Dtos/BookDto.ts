export class BookDto implements IBookDto {
    Nombre: string;
    Autor: string;
    Genero: string;
    Calificacion: number;
    ISBN: string;
    Editorial: string;
    Sinopsis: string;
    constructor(book : IBook){
        this.Nombre = book.Nombre;
        this.Autor = book.Autor;
        this.Genero = book.Genero;
        this.Editorial = book.Editorial;
        this.ISBN = book.ISBN;
        this.Calificacion = book.Calificacion;
        this.Sinopsis = book.Sinopsis;
    }
    
}
