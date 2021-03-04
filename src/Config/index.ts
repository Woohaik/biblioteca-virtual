require("dotenv").config();

import PRODUCTION from "./environments/production";
import DEVELOPMENT from "./environments/development";

const { NODE_ENV } = process.env;  

const enviroment: Enviroment = {
    ...(NODE_ENV === "DEVELOPMENT" ? DEVELOPMENT : PRODUCTION),
    __IsProd__: NODE_ENV === "PRODUCTION",
    EMAIL: {
        password: process.env.EMAIL_PASSWORD,
        username: process.env.EMAIL_USER,
    },
    SECRET: (() => {
        if (typeof process.env.JWT_SECRET === "undefined") throw new Error("SECRET NO VALIDO")
        return process.env.JWT_SECRET || ""
    })()

};
 
export default enviroment;