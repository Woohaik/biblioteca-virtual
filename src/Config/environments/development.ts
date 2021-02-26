
require("dotenv").config();
export default {
    DB: {
        username: process.env.develop_username,
        password: process.env.develop_password,
        database: process.env.develop_database,
        host: process.env.develop_host,
        dialect: "postgres" as const,
    },
    PORT: process.env.PORT || 3000
}