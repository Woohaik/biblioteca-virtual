type Enviroment = {
    DB: {
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
        host: string | undefined;
        dialect: "postgres";
    },
    PORT: string | number,
    __IsProd__: boolean,
}


interface IUser {
    ID?: string;
    Email: string;
    Name: string;
    Password: string;
    Username: string;
    LastName: string;
    ConfirmedEmail: boolean;
    RefreshToken?: string ;
}

interface IUserDto {
    ID?: string;
    Email: string;
    Name: string;
    Username: string;
    LastName: string;
}

interface IUserService {
    registerUser(param: IUser): Promise<void>
}

interface IBook {
    ID?: string;
    Nombre: string; 
    Autor: string; 
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
    Genero: string; 
    Calificacion: number; 
    ISBN: string; 
    Editorial: string; 
    Sinopsis: string;
}

interface IBookService {
    getAllBooks(): Promise<IBook[]>
}

interface IRepository<T> {
    getById(id: number): Promise<T | undefined>;
    save(entity: T): Promise<void>;
    findAll(): Promise<T[]>;
}

interface IUserRepository extends IRepository<IUser> { }

interface IBookRepository extends IRepository<IBook> { }