type Enviroment = {
    DB: {
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
        host: string | undefined;
        dialect: "postgres";
    },
    EMAIL: {
        username: string | undefined;
        password: string | undefined;
    }
    PORT: string | number,
    __IsProd__: boolean,
    SECRET: string,
    HOST: string
}

interface IUser {
    ID: number;
    Email: string;
    Name: string;
    Password: string;
    Username: string;
    Rol?: string;
    LastName: string;
    ConfirmedEmail: boolean;
    CreatedAt: Date;
    UpdatedAt: Date;
}

interface IUserDto {
    ID?: number;
    Email: string;
    Name: string;
    Username: string;
    LastName: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    ConfirmedEmail: boolean;
}

interface IUserService {
    loginUser(Email: string, Password: string): Promise<IUser>;
    registerUser(param: IUser): Promise<void>
    getAllUser(): Promise<IUser[]>
    deleteUser(id: number): Promise<void>
    getById(id: number): Promise<IUser | undefined>
    confirmEmail(confirmMailId: string): Promise<void>
}

interface IBook {
    [x: string]: any
    ID?: number;
    Name: string;
    Author: string;
    PublicationYear: number;
    Genre: string;
    Rate: number;
    ISBN: string;
    Editorial: string;
    Synopsis: string;
    CreatedAt: Date;
    UpdatedAt: Date;
}

interface IBookDto {
    ID?: number;
    Name: string;
    Author: string;
    PublicationYear: number;
    Genre: string;
    Rate: number;
    ISBN: string;
    Editorial: string;
    Synopsis: string;
}

interface IBookService {
    getAllBooks(): Promise<IBook[]>
    getById(id: number): Promise<IBook | undefined>
    getByAuthor(author: string): Promise<IBook[] | undefined>
    getByEditorial(editorial: string): Promise<IBook[] | undefined>
    getByGenre(genre: string): Promise<IBook[] | undefined>
    addBook(param: IBook): Promise<void>
    deleteBook(id: number): Promise<void>
    updateBook(id: number, book: IBook): Promise<void>
}

interface IApiBooking {
    userID: number;
    bookID: number;
}

interface IBooking {
    ID?: number;
    User: IUser;
    Book: IBook;
    Format: string;
    Presentation: string;
    StartDate: Date;
    EndDate: Date;
}

interface IBookingDto {
    ID?: number;
    User: IUserDto;
    Book: IBookDto;
    StartDate: Date;
    EndDate: Date;
}

interface IBookingService {
    getAllBookings(): Promise<IBooking[]>
    addBooking(userId: number, bookId: number | undefined, isFisico: Boolean, isText: Boolean): Promise<void>
    getById(id: number): Promise<IBooking | undefined>
    deleteBooking(id: number): Promise<void>
    updateBooking(id: number, userId: number, bookId: number, isFisico: Boolean, isText: Boolean): Promise<void>
}

interface IReview {
    ID: number;
    UserId: number;
    BookId: number;
    Rate: number;
    Commentary: string;
    CreatedAt: Date;
}
interface IReviewDto {
    ID?: number;
    CreatedAt: Date;
    Commentary: string;
    Rate: number;
    BookId?: number;
    UserId?: number;
}
interface IReviewService {
    getAllReviews(): Promise<IReview[]>
    addReview(newReview: IReview): Promise<void>
    getById(id: number): Promise<IReview | undefined>
    updateReview(id: number, review: IReview): Promise<void>
    deleteReview(id: number): Promise<void>
}

interface IRepository<T> {
    getById(id: number): Promise<T | undefined>;
    getAll(): Promise<T[]>;
    save(entity: T): Promise<void>;
    edit(id: number, entity: T): Promise<void>;
    delete(id: number): Promise<void>;
}

interface IUserRepository extends IRepository<IUser> {
    getByEmail(email: string): Promise<IUser | undefined>;
    saveEmailValidate(id: string, email: string): Promise<void>;
    confirmEmail(userId: number, confirmMailId: string): Promise<void>;
    getConfirmationEmail(confirmMailId: string): Promise<string | undefined>;
}

interface IBookRepository extends IRepository<IBook> {
    getByName(Name: string): Promise<IBook | undefined>;
    getByAuthor(Author: string): Promise<IBook[] | undefined>;
    getByGenre(genre: string): Promise<IBook[] | undefined>
    getByEditorial(editorial: string): Promise<IBook[] | undefined>
    // saveEmailValidate(id: string, email: string): Promise<void>;
    // confirmEmail(userId: number, confirmMailId: string): Promise<void>;
    // getConfirmationEmail(confirmMailId: string): Promise<string | undefined>;
}
interface IBookingRepository extends IRepository<IBooking> {
    saveBooking(entity: IReservaProducto): Promise<void>;
    editBooking(id: number, entity: IReservaProducto): Promise<void>;
}

interface IReviewRepository extends IRepository<IReview> {
    getById(id: number): Promise<IReview | undefined>;
}





////////////////////////////////////////////////////////////////


interface Observer {
    update(template: EmailTemplate): void;
}


interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(template: EmailTemplate): void;
}

type EmailTemplate = {
    subject: string;
    html: string;
}



interface IReservaProducto {
    presentacion: IPresentacion;
    formato: IFormato;
    usuario: IUser;
    StartDate: Date;
    EndDate: Date;
    libro: IBook;
}

interface IBuilder {
    construyeFechas(): void;
    construyeFormato(): void;
    construyePresentacion(): void;
    obtenerReserva(): IReservaProducto;

}
interface IBuilderValoraciones {
    construyeValoracion(): void;
}
interface IValoracionProducto {
    usuario: IUser;
    libro: IBook;
    Rate: IValorado;
    Commentary: ICommentary;
}
interface IPresentacion {
    presentacion(): string;
}
interface IFormato {
    formato(): string;
}
interface IValorado {
    valorado(): string;
}
interface ICommentary {
    valorado(): string;
}