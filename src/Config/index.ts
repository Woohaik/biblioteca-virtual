require("dotenv").config();

import PRODUCTION from "./environments/production";
import DEVELOPMENT from "./environments/development";

const { NODE_ENV } = process.env;

const enviroment: Enviroment = {
    ...(NODE_ENV === "DEVELOPMENT" ? DEVELOPMENT : PRODUCTION),
    __IsProd__: NODE_ENV === "PRODUCTION"
};

export default enviroment;