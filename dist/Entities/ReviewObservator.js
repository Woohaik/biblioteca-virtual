"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewObservator = void 0;
const MailService_1 = require("./../App/Services/MailService");
class ReviewObservator {
    constructor(email, letra, letras) {
        this.email = email;
        this.letra = letra;
        this.letras = letras;
    }
    update(template) {
        this.sendMail(template);
    }
    sendMail(template) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MailService_1.MailService.sendEmail(this.email, template);
            console.log(this.email);
            console.log(this.letra);
            console.log(this.letras);
        });
    }
}
exports.ReviewObservator = ReviewObservator;
//# sourceMappingURL=ReviewObservator.js.map