import { BookDto } from "./BookDto";
import { UserDto } from "./UserDto";

export class BookingDto implements IBookingDto {
    ID?: number;
    User: IUserDto;
    Format: string;
    Presentation: string;
    Book: IBookDto;
    StartDate: Date;
    EndDate: Date;
    constructor(booking: IBooking) {
        console.log(booking);
        this.ID = booking.ID;
        this.User = new UserDto(booking.User);
        this.Format = booking.Format;
        this.Presentation = booking.Presentation;
        this.Book = new BookDto(booking.Book);
        this.StartDate = booking.StartDate;
        this.EndDate = booking.EndDate;
    }

}
