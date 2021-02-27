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
    id: string;
    email: string;
    name: string;
    password: string;
}
interface IUserDto {
    id: string;
    email: string;
    name: string;
}

