import { createConnection } from "typeorm";
import { Usuario } from "../Entities/Usuario";
import { Libro } from "../Entities/Libros";
import { ConfirmEmails } from "../Entities/ConfirmedEmail";

import ENVIRONMENTS from "../Config"

export const getDbConnection = async () => {
    const entities = [
        Usuario,
        Libro
        ConfirmEmails

    ];
    const conn = await createConnection({
        type: ENVIRONMENTS.DB.dialect,
        host: ENVIRONMENTS.DB.host,
        port: 5432,
        username: ENVIRONMENTS.DB.username,
        password: ENVIRONMENTS.DB.password,
        database: ENVIRONMENTS.DB.database,
        entities: entities,
        synchronize: true
    });
    return conn;
}