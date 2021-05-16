import {
    controller,
    httpGet,
    httpPost,
    requestBody,
    response
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Response } from 'express';
import { INVERSIFY_TYPES } from "./../../Config";
import { ResponseDto } from "./../Dtos/ResponseDto"
import { BookingDto } from './../Dtos/BookingDto';
import { ErrorDto } from '../Dtos/ErrorDto';
import { validateBooking } from '../utils';

@controller('/api/booking')
export class BookingController {
    constructor(@inject(INVERSIFY_TYPES.BookingService) private bookingService: IBookingService) { }
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

    @httpPost("/")
    public async addBooking(
        @response() _: Response,
        @requestBody() newBooking: IApiBooking
    ): Promise<ResponseDto> {
        try {
            console.log(newBooking);

            let isValid = await validateBooking(newBooking);
            if (isValid.failed) return new ResponseDto(isValid.errors, {})


            await this.bookingService.addBooking(newBooking.userID, newBooking.bookId, false, false);
            return new ResponseDto([], {
                message: "Reserva Agregada"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("MODAL", error.message)], {
            })
        }
    }
}