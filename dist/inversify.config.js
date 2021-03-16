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
exports.bindings = void 0;
const inversify_1 = require("inversify");
const constants_1 = require("./Config/constants");
require("./Api/Controllers");
const UserService_1 = require("./App/Services/UserService");
const BookService_1 = require("./App/Services/BookService");
const BookingService_1 = require("./App/Services/BookingService");
const connection_1 = require("./Data/connection");
const UserRepository_1 = require("./Data/Repositories/UserRepository");
const BookRepository_1 = require("./Data/Repositories/BookRepository");
const BookingRepository_1 = require("./Data/Repositories/BookingRepository");
exports.bindings = new inversify_1.AsyncContainerModule((bind) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.getDbConnection();
    bind(constants_1.TYPES.UserService).to(UserService_1.UserService);
    bind(constants_1.TYPES.UserRepository).to(UserRepository_1.UserRepository);
    bind(constants_1.TYPES.BookService).to(BookService_1.BookService);
    bind(constants_1.TYPES.BookRepository).to(BookRepository_1.BookRepository);
    bind(constants_1.TYPES.BookingService).to(BookingService_1.BookingService);
    bind(constants_1.TYPES.BookingRepository).to(BookingRepository_1.BookingRepository);
}));
//# sourceMappingURL=inversify.config.js.map