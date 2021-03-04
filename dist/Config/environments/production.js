"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = {
    DB: {
        username: process.env.PRODUCTION_USERNAME,
        password: process.env.PRODUCTION_PASSWORD,
        database: process.env.PRODUCTION_DATABASE,
        host: process.env.PRODUCTION_HOST,
        dialect: "postgres",
    },
    HOST: "https://bibliotechtest.herokuapp.com",
    PORT: process.env.PORT || 80
};
//# sourceMappingURL=production.js.map