import { Express } from "express";

export class Server {
    private express: Express;
    constructor(express: Express) {
        this.express = express;
    }
    async start() {
        try {
            await this.express.listen(7000, () => {
                console.log(`Running on port 7000`);
            });
        } catch (error) {
            console.log(error);
        }
    }
}