import { createConnection } from "typeorm";
import { User as Users } from "./Entities/User";
import ENVIRONMENTS from "../Config"

export const getDbConnection = async () => {
    const entities = [
        Users
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