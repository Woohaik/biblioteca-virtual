"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVERSIFY_TYPES = exports.CONFIG = void 0;
require("dotenv").config();
const production_1 = __importDefault(require("./environments/production"));
const development_1 = __importDefault(require("./environments/development"));
const inversifyTypes_1 = __importDefault(require("./inversifyTypes"));
exports.INVERSIFY_TYPES = inversifyTypes_1.default;
const { NODE_ENV } = process.env;
const enviroment = Object.assign(Object.assign({}, (NODE_ENV === "development" ? development_1.default : production_1.default)), { __IsProd__: NODE_ENV === "production", EMAIL: {
        password: process.env.EMAIL_PASSWORD,
        username: process.env.EMAIL_USER,
    }, SECRET: (() => {
        if (typeof process.env.JWT_SECRET === "undefined")
            throw new Error("SECRET NO VALIDO");
        return process.env.JWT_SECRET || "";
    })() });
exports.CONFIG = enviroment;
//# sourceMappingURL=index.js.map