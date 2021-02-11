import express, { Response } from "express";

const main = async (): Promise<void> => {
    console.log("--------------------------");
    const app = express();
    app.get("/", (_, res: Response) => {
        res.send("Main Page");
    });
    app.listen(3600, () => {
        console.log("Server on port 3600");
    });
}


main();