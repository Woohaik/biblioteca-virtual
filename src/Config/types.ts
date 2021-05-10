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
    registerUser(param: IUser): Promise<void>
    getAllUser(): Promise<IUser[]>
    getById(): Promise<IUser>
    confirmEmail(confirmMailId: string): Promise<void>
}

interface IBook {
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
    addBook(param: IBook): Promise<void>
}

interface IApiBooking {
    userID: number;
    bookId: number;
}

interface IBooking {
    ID?: number;
    User: IUser;
    Book: IBook;
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

interface IValoraciones {
    ID?: number;
    UserId: number;
    BookId: number;
    Rate: number;
    Commentary: string;
    CreatedAt: Date;
}



interface IBookingService {
    getAllBookings(): Promise<IBooking[]>
    addBooking(userId: number, bookId: number): Promise<void>
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

interface IBookRepository extends IRepository<IBook> { }
interface IBookingRepository extends IRepository<IBooking> { }



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
    libro: IBook;
}

interface IBuilder {
    construyeFormato(): void;
    construyePresentacion(): void;
    obtenerReserva(): IReservaProducto;

}

interface IPresentacion {
    presentacion(): string;
}
interface IFormato {
    formato(): string;
}