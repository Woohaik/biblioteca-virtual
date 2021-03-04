
require("dotenv").config();
export default {
    DB: {
        username: process.env.DEVELOP_USERNAME,
        password: process.env.DEVELOP_PASSWORD,
        database: process.env.DEVELOP_DATABASE,
        host: process.env.DEVELOP_HOST,
        dialect: "postgres" as const,
    }, 
    HOST: `http://localhost:${process.env.PORT || 4000}`,
    PORT: process.env.PORT || 4000
}