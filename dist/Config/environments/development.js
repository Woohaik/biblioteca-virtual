"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = {
    DB: {
        username: process.env.DEVELOP_USERNAME,
        password: process.env.DEVELOP_PASSWORD,
        database: process.env.DEVELOP_DATABASE,
        host: process.env.DEVELOP_HOST,
        dialect: "postgres",
    },
    HOST: `http://localhost:${process.env.PORT || 4000}`,
    PORT: process.env.PORT || 4000
};
//# sourceMappingURL=development.js.map