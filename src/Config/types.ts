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
    ID: string;
    Email: string;
    Name: string;
    Password: string;
    Username: string;
    LastName: string;
    ConfirmedEmail: boolean;

    RefreshToken: string;
    CreatedAt: Date;
    UpdatedAt: Date;
}

interface IUserDto {
    ID?: string;
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
    ID?: string;
    Nombre: string; 
    Autor: string; 
    Anio: number;
    Genero: string; 
    Calificacion: number; 
    ISBN: string; 
    Editorial: string; 
    Sinopsis: string;
}

interface IBookDto {
    ID?: string;
    Nombre: string; 
    Autor: string; 
    Anio: number;
    Genero: string; 
    Calificacion: number; 
    ISBN: string; 
    Editorial: string; 
    Sinopsis: string;
}

interface IBookService {
    getAllBooks(): Promise<IBook[]>
}

interface IBooking {
    ID?: string;
    IdUser: string; 
    IdBook: string; 
    StartDate: Date; 
    EndDate: Date; 
}

interface IBookingDto {
    ID?: string;
    IdUser: string; 
    IdBook: string; 
    StartDate: Date; 
    EndDate: Date; 
}

interface IBookingService {
    getAllBookings(): Promise<IBooking[]>
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
    confirmEmail(userId: string, confirmMailId: string): Promise<void>;
    getConfirmationEmail(confirmMailId: string): Promise<string | undefined>;
}


interface IBookRepository extends IRepository<IBook> { }
interface IBookingRepository extends IRepository<IBooking> { }

  

