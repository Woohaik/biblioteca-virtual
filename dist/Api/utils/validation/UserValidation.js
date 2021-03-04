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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const ErrorDto_1 = require("../../Dtos/ErrorDto");
const userValidator = joi_1.default.object({
    Email: joi_1.default.string().min(3),
    Name: joi_1.default.string().min(3),
    Username: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    Password: joi_1.default.string().min(3),
    LastName: joi_1.default.string().min(3).required()
});
const validateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userValidator.validateAsync(user);
        return {
            failed: false
        };
    }
    catch (error) {
        return {
            failed: true,
            errors: error === null || error === void 0 ? void 0 : error.details.map((err) => {
                let [field, ...message] = err.message.split(" ");
                return new ErrorDto_1.ErrorDto(field.replace('"', "").replace('"', ""), message.join(" "));
            })
        };
    }
});
exports.validateUser = validateUser;
//# sourceMappingURL=UserValidation.js.map