import { createConnection } from "typeorm";
import { User } from "../Models/User";
import ENVIRONMENTS from "../Config"

export const getDbConnection = async () => {
    const entities = [
        User
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