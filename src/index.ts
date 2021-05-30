import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { bindings } from "./inversify.config";
import { CONFIG } from "./Config";
import cookieParser from "cookie-parser";

import cors from "cors";

(async () => {
    const container = new Container()
    await container.loadAsync(bindings);
    let server = new InversifyExpressServer(container);
    server.setConfig((app) => {


        app.use(cookieParser(CONFIG.SECRET));

        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(cors({ origin: "*" }))
    });
    let serverInstance = server.build();
    serverInstance.listen(CONFIG.PORT, () => {
        console.log(`Server started on port ${CONFIG.PORT} :)`);
    });
})();