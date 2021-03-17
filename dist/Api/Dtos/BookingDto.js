"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingDto = void 0;
const BookDto_1 = require("./BookDto");
const UserDto_1 = require("./UserDto");
class BookingDto {
    constructor(booking) {
        console.log(booking);
        this.ID = booking.ID;
        this.User = new UserDto_1.UserDto(booking.User);
        this.Book = new BookDto_1.BookDto(booking.Book);
        this.StartDate = booking.StartDate;
        this.EndDate = booking.EndDate;
    }
}
exports.BookingDto = BookingDto;
//# sourceMappingURL=BookingDto.js.map