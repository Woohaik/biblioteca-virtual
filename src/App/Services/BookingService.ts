
import { INVERSIFY_TYPES } from './../../Config';
import { inject, injectable } from 'inversify';
import { Director } from './../../Entities/builder/Director';
import { BuilderFisico } from './../../Entities/builder/BuilderFisico';
import { BuilderDigitalTexto } from './../../Entities/builder/BuilderDigitalTexto';
import { BuilderDigitalVoz } from './../../Entities/builder/BuilderDigitalVoz';

@injectable()
export class BookingService implements IBookingService {
    constructor(@inject(INVERSIFY_TYPES.BookingRepository) private bookingRepository: IBookingRepository,
        @inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository,
        @inject(INVERSIFY_TYPES.BookRepository) private bookRepository: IBookRepository
    ) { }

    async addBooking(userId: number, bookId: number, isFisico: Boolean, isText: Boolean): Promise<void> {
        const user: IUser | undefined = await this.userRepository.getById(userId);
        const book: IBook | undefined = await this.bookRepository.getById(bookId);
        if (user && book) {
            let reservaAGuardar: IReservaProducto;
            const director = new Director();
            if (isFisico) {
                const builderFisico = new BuilderFisico()
                director.Construye(builderFisico);
                reservaAGuardar = builderFisico.obtenerReserva();
            } else {
                if (isText) {
                    const builderDigitalTexto = new BuilderDigitalTexto();
                    director.Construye(builderDigitalTexto);
                    reservaAGuardar = builderDigitalTexto.obtenerReserva();
                } else {
                    const builderDigitalVoz = new BuilderDigitalVoz();
                    director.Construye(builderDigitalVoz);
                    reservaAGuardar = builderDigitalVoz.obtenerReserva();
                }
            }
            reservaAGuardar.libro = book;
            reservaAGuardar.usuario = user;
            this.bookingRepository.saveBooking(reservaAGuardar);
        }
    }


    async getAllBookings(): Promise<IBooking[]> {
        return await this.bookingRepository.getAll()
    }
}