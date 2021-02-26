interface Enviroment {
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


