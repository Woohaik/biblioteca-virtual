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
exports.validateBooking = void 0;
const joi_1 = __importDefault(require("joi"));
const ErrorDto_1 = require("../../Dtos/ErrorDto");
const bookingValidator = joi_1.default.object({
    userID: joi_1.default.number().positive().required(),
    bookId: joi_1.default.number().positive().required()
});
const validateBooking = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield bookingValidator.validateAsync(user);
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
exports.validateBooking = validateBooking;
//# sourceMappingURL=BookingValidation.js.map