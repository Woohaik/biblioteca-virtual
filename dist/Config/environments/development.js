"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = {
    DB: {
        username: process.env.develop_username,
        password: process.env.develop_password,
        database: process.env.develop_database,
        host: process.env.develop_host,
        dialect: "postgres",
    },
    HOST: `http://localhost:${process.env.PORT || 4000}`,
    PORT: process.env.PORT || 4000
};
//# sourceMappingURL=development.js.map