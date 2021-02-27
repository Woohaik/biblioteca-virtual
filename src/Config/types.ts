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
    id?: string;
    email: string;
    name: string;
    password: string;
}

interface IUserDto {
    id?: string;
    email: string;
    name: string;
}

interface IUserService {

    getUser(id: number): Promise<IUser | undefined>
    registerUser(param: IUser): Promise<IUser | undefined>
}

interface IRepository<T> {
    getById(id: number): Promise<T | undefined>;
    save(entity: T): Promise<T | undefined>;
}

interface IUserRepository extends IRepository<IUser> { }