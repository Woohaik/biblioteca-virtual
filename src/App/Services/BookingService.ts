import { TYPES } from '../../config/constants';
import { inject, injectable } from 'inversify';

@injectable()
export class BookingService implements IBookingService {
    constructor(@inject(TYPES.BookingRepository) private bookingRepository: IBookingRepository) { }

    async getAllBookings(): Promise<IBooking[]> {
        return await this.bookingRepository.getAll()
    }
}