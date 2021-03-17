import { INVERSIFY_TYPES } from './../../Config';
import { inject, injectable } from 'inversify';
import { Booking } from '../../Entities/Reservas';

@injectable()
export class BookingService implements IBookingService {
    constructor(@inject(INVERSIFY_TYPES.BookingRepository) private bookingRepository: IBookingRepository,
        @inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository,
        @inject(INVERSIFY_TYPES.BookRepository) private bookRepository: IBookRepository
    ) { }


    async addBooking(userId: number, bookId: number): Promise<void> {
        const user: IUser | undefined = await this.userRepository.getById(userId);
        const book: IBook | undefined = await this.bookRepository.getById(bookId);
        const booking: IBooking = new Booking();

        if (user) {
            console.log(user);

            booking.User = user;
        }

        if (book) {
            booking.Book = book;
            booking.StartDate = new Date();
            booking.EndDate = new Date();
        }
        // Bsca el usuario para
        // 


        //////////// Adding booking


        this.bookingRepository.save(booking);




    }

    async getAllBookings(): Promise<IBooking[]> {


        return await this.bookingRepository.getAll()
    }
}