export class BookDto implements IBookDto {
    Name: string;
    Author: string;
    PublicationYear: number;
    Genre: string;
    Rate: number;
    ISBN: string;
    Editorial: string;
    Synopsis: string;
    constructor(book : IBook){
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
