"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingDto = void 0;
class BookingDto {
    constructor(booking) {
        this.ID = booking.ID;
        this.IdUser = booking.IdUser;
        this.IdBook = booking.IdBook + "xd";
        this.StartDate = booking.StartDate;
        this.EndDate = booking.EndDate;
    }
}
exports.BookingDto = BookingDto;
//# sourceMappingURL=BookingDto.js.map