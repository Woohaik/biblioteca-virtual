"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = {
    DB: {
        username: process.env.production_username,
        password: process.env.production_password,
        database: process.env.production_database,
        host: process.env.production_host,
        dialect: "postgres",
    },
    HOST: "https://bibliotechtest.herokuapp.com",
    PORT: process.env.PORT || 4000
};
//# sourceMappingURL=production.js.map