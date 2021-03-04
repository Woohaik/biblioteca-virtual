"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmEmailTemplate = void 0;
var Config_1 = __importDefault(require("./../../../Config"));
var confirmEmailTemplate = function (link) { return ({
    subject: "Confirmar Registro",
    html: "<a href=\"" + Config_1.default.HOST + "/api/user/confirm-email/" + link + "\"> Click Para Confirmar :) </a>"
}); };
exports.confirmEmailTemplate = confirmEmailTemplate;
//# sourceMappingURL=confirmEmailTemplate.js.map