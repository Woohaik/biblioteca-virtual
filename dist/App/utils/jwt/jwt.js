"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Config_1 = __importDefault(require("./../../../Config"));
var loginUserToken = function () {
    var payload = { g: "x" };
    var token = jsonwebtoken_1.default.sign(payload, Config_1.default.SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 3 });
    return token;
};
exports.loginUserToken = loginUserToken;
//# sourceMappingURL=jwt.js.map