import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    requestBody,
    requestParam,
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
    public async addBooking(@response() _: Response, @requestBody() newBooking: IApiBooking): Promise<ResponseDto> {
        try {
            // console.log("New Booking"+newBooking);

            let isValid = await validateBooking(newBooking);
            if (isValid.failed) return new ResponseDto(isValid.errors, {})


            await this.bookingService.addBooking(newBooking.userID, newBooking.bookID, true, true);
            return new ResponseDto([], {
                message: "Reserva Creada"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("MODAL", error.message)], {
            })
        }
    }

    @httpGet("/:id")
    public async getBookingsById(@requestParam("id") id: number): Promise<ResponseDto> {
        let bookings = await this.bookingService.getById(id);
        return new ResponseDto([], {
            bookings: bookings
        })
    }

    @httpDelete("/:id")
    public async deleteBook(@requestParam("id") id: number): Promise<ResponseDto> {
        await this.bookingService.deleteBooking(id);
        return new ResponseDto([], {
            message: "Reserva Eliminada"
        })
    }

    @httpPost("/updateBooking/:id")
    public async update(@requestParam("id") id: number, @requestBody() newBooking: IApiBooking): Promise<ResponseDto> {

        try {

            let isValid = await validateBooking(newBooking);
            if (isValid.failed) return new ResponseDto(isValid.errors, {})
            
            await this.bookingService.updateBooking(id, newBooking.userID, newBooking.bookID, false, true);
            return new ResponseDto([], {
                message: "Reserva Modificada"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("MODAL", error.message)], {
            })
        }
    }
}