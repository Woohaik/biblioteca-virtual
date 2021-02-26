import { Express } from "express";

export class Server {

    private express: Express;
    private CONFIG: Enviroment;

    constructor(express: Express, CONFIG: Enviroment) {
        this.express = express;
        this.CONFIG = CONFIG
    }

    private async DBConnection() {
        // Conexion a DB :)
    }

    async start() {
        try {
            await this.express.listen(this.CONFIG.PORT, () => {
                console.log(`Running on port ${this.CONFIG.PORT}`);
            });
            await this.DBConnection();
        } catch (error) {
            console.log(error);
        }
    }

}