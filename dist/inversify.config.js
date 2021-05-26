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
const Config_1 = require("./Config/");
require("./Api/Controllers");
const ReviewService_1 = require("./App/Services/ReviewService");
const UserService_1 = require("./App/Services/UserService");
const BookService_1 = require("./App/Services/BookService");
const BookingService_1 = require("./App/Services/BookingService");
const connection_1 = require("./Data/connection");
const UserRepository_1 = require("./Data/Repositories/UserRepository");
const BookRepository_1 = require("./Data/Repositories/BookRepository");
const ReviewRepository_1 = require("./Data/Repositories/ReviewRepository");
const BookingRepository_1 = require("./Data/Repositories/BookingRepository");
exports.bindings = new inversify_1.AsyncContainerModule((bind) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.getDbConnection();
    bind(Config_1.INVERSIFY_TYPES.UserService).to(UserService_1.UserService);
    bind(Config_1.INVERSIFY_TYPES.UserRepository).to(UserRepository_1.UserRepository);
    bind(Config_1.INVERSIFY_TYPES.BookService).to(BookService_1.BookService);
    bind(Config_1.INVERSIFY_TYPES.BookRepository).to(BookRepository_1.BookRepository);
    bind(Config_1.INVERSIFY_TYPES.BookingService).to(BookingService_1.BookingService);
    bind(Config_1.INVERSIFY_TYPES.BookingRepository).to(BookingRepository_1.BookingRepository);
    bind(Config_1.INVERSIFY_TYPES.ReviewService).to(ReviewService_1.ReviewService);
    bind(Config_1.INVERSIFY_TYPES.ReviewRepository).to(ReviewRepository_1.ReviewRepository);
}));
//# sourceMappingURL=inversify.config.js.map