"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.BookingController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const constants_1 = require("./../../Config/constants");
const ResponseDto_1 = require("./../Dtos/ResponseDto");
const BookingDto_1 = require("./../Dtos/BookingDto");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    getBookings(_) {
        return __awaiter(this, void 0, void 0, function* () {
            let bookings = yield this.bookingService.getAllBookings();
            let mappedBookings = bookings.map((booking) => {
                return new BookingDto_1.BookingDto(booking);
            });
            return new ResponseDto_1.ResponseDto([], {
                bookings: mappedBookings
            });
        });
    }
    addBooking(_, newBooking) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(newBooking);
            yield this.bookingService.addBooking(1, 1);
            return new ResponseDto_1.ResponseDto([], {
                message: "Reserva Agregada"
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __param(0, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getBookings", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.response()),
    __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "addBooking", null);
BookingController = __decorate([
    inversify_express_utils_1.controller('/api/booking'),
    __param(0, inversify_1.inject(constants_1.TYPES.BookingService)),
    __metadata("design:paramtypes", [Object])
], BookingController);
exports.BookingController = BookingController;
//# sourceMappingURL=BookingController.js.map