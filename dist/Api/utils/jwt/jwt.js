"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.loginUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Config_1 = require("../../../Config");
const loginUserToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, Config_1.CONFIG.SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 3 });
    return token;
};
exports.loginUserToken = loginUserToken;
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, Config_1.CONFIG.SECRET);
};
exports.decodeToken = decodeToken;
//# sourceMappingURL=jwt.js.map