
require("dotenv").config();
export default {
    DB: {
        username: process.env.production_username,
        password: process.env.production_password,
        database: process.env.production_database,
        host: process.env.production_host,
        dialect: "postgres" as const,
    },
    PORT: process.env.PORT || 3000
}