export class BookingDto implements IBookingDto {
    ID?: number;
    UserId: number;
    BookId: number;
    StartDate: Date;
    EndDate: Date;
    constructor(booking: IBooking) {
        this.ID = booking.ID;
        this.UserId = booking.UserId;
        this.BookId = booking.UserId;
        this.StartDate = booking.StartDate;
        this.EndDate = booking.EndDate;
    }
}
