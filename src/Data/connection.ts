import { createConnection } from "typeorm";
import { CONFIG as ENVIRONMENTS } from "../Config"
// Entidades
import { Usuario } from "../Entities/Usuario";
import { Libro } from "../Entities/Libro";
import { ConfirmEmails } from "../Entities/ConfirmedEmail";
import { Valoraciones } from "../Entities/Valoraciones";
import { Booking } from "../Entities/Reservas";

export const getDbConnection = async () => {
    const entities = [
        Usuario,
        Libro,
        ConfirmEmails,
        Booking,
        Valoraciones
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