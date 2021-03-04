export class BookingDto implements IBookingDto {
    ID?: string;
    IdUser: string; 
    IdBook: string; 
    StartDate: Date; 
    EndDate: Date; 
    constructor(booking : IBooking){
        this.ID = booking.ID;
        this.IdUser = booking.IdUser;
        this.IdBook = booking.IdBook;
        this.StartDate = booking.StartDate;
        this.EndDate = booking.EndDate;
    }
    
}
