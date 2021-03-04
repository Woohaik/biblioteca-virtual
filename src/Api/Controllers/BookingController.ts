import {
    controller,
    httpGet,
    response
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Response } from 'express';
import { TYPES } from "../../Config/constants"
import { ResponseDto } from "./../Dtos/ResponseDto"
import { BookingDto } from '../Dtos/BookingDto';

@controller('/api/booking')
export class BookingController {
    constructor(@inject(TYPES.BookingService) private bookingService: IBookingService) { }
    @httpGet("/")
    public async getBookings(
        @response() _: Response
    ): Promise<ResponseDto> {
        let bookings = await this.bookingService.getAllBookings();
        let mappedBookings = bookings.map((booking) => {
            return new BookingDto(booking)
        });
        return new ResponseDto([], {
            bookings: mappedBookings
        })
    }
}