"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
require("dotenv").config();
var production_1 = __importDefault(require("./environments/production"));
var development_1 = __importDefault(require("./environments/development"));
var NODE_ENV = process.env.NODE_ENV;
var enviroment = __assign(__assign({}, (NODE_ENV === "development" ? development_1.default : production_1.default)), { __IsProd__: NODE_ENV === "production", EMAIL: {
        password: process.env.EMAIL_PASSWORD,
        username: process.env.EMAIL_USER,
    }, SECRET: (function () {
        if (typeof process.env.JWT_SECRET === "undefined")
            throw new Error("SECRET NO VALIDO");
        return process.env.JWT_SECRET || "";
    })() });
exports.CONFIG = enviroment;
//# sourceMappingURL=index.js.map