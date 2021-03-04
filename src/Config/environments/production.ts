
require("dotenv").config();
export default {
    DB: {
        username: process.env.PRODUCTION_USERNAME,
        password: process.env.PRODUCTION_PASSWORD,
        database: process.env.PRODUCTION_DATABASE,
        host: process.env.PRODUCTION_HOST,
        dialect: "postgres" as const,
    },
    HOST: "https://bibliotechtest.herokuapp.com",
    PORT: process.env.PORT || 80
}