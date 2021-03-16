"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmEmailTemplate = void 0;
const Config_1 = require("./../../../Config");
const confirmEmailTemplate = (link) => ({
    subject: "Confirmar Registro",
    html: `<a href="${Config_1.CONFIG.HOST}/api/user/confirm-email/${link}"> Click Para Confirmar :) </a>`
});
exports.confirmEmailTemplate = confirmEmailTemplate;
//# sourceMappingURL=confirmEmailTemplate.js.map