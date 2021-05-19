
import { INVERSIFY_TYPES } from './../../Config';
import { inject, injectable } from 'inversify';
import { Director } from './../../Entities/builder/Director';
import { BuilderFisico } from './../../Entities/builder/BuilderFisico';
import { BuilderDigitalTexto } from './../../Entities/builder/BuilderDigitalTexto';
import { BuilderDigitalVoz } from './../../Entities/builder/BuilderDigitalVoz';
import { PresentacionTexto, PresentacionVoz } from './../../Entities/builder/Presentacion';
import { FormatoDigital, FormatoFisico } from './../../Entities/builder/Formato';

@injectable()
export class BookingService implements IBookingService {
    constructor(@inject(INVERSIFY_TYPES.BookingRepository) private bookingRepository: IBookingRepository,
        @inject(INVERSIFY_TYPES.UserRepository) private userRepository: IUserRepository,
        @inject(INVERSIFY_TYPES.BookRepository) private bookRepository: IBookRepository
    ) { }

    async getAllBookings(): Promise<IBooking[]> {
        return await this.bookingRepository.getAll()
    }

    async getById(id: number): Promise<IBooking | undefined> {
        return await this.bookingRepository.getById(id);
    }

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
                reservaAGuardar.presentacion = new PresentacionVoz();
                reservaAGuardar.formato = new FormatoFisico();
                
            } else {
                if (isText) {
                    const builderDigitalTexto = new BuilderDigitalTexto();
                    director.Construye(builderDigitalTexto);
                    reservaAGuardar = builderDigitalTexto.obtenerReserva();
                    reservaAGuardar.presentacion = new PresentacionTexto();
                } else {
                    const builderDigitalVoz = new BuilderDigitalVoz();
                    director.Construye(builderDigitalVoz);
                    reservaAGuardar = builderDigitalVoz.obtenerReserva();
                    reservaAGuardar.formato = new FormatoDigital();
                }
            }
            reservaAGuardar.libro = book;
            reservaAGuardar.usuario = user;

            console.log("Libro: "+reservaAGuardar.libro.ID);
            console.log("Usuario: "+reservaAGuardar.usuario.ID);
            console.log("Presentacion: "+reservaAGuardar.presentacion.presentacion());
            console.log("Formato: "+reservaAGuardar.formato.formato());
            
            this.bookingRepository.saveBooking(reservaAGuardar);
        }
    }

    async updateBooking(id: number, userId: number, bookId: number, isFisico: Boolean, isText: Boolean): Promise<void> {
        const user: IUser | undefined = await this.userRepository.getById(userId);
        const book: IBook | undefined = await this.bookRepository.getById(bookId);
        if (user && book) {
            let reservaAModificar: IReservaProducto;
            const director = new Director();
            if (isFisico) {
                const builderFisico = new BuilderFisico()
                director.Construye(builderFisico);
                reservaAModificar = builderFisico.obtenerReserva();
                reservaAModificar.presentacion = new PresentacionVoz();
                reservaAModificar.formato = new FormatoFisico();
                
            } else {
                if (isText) {
                    const builderDigitalTexto = new BuilderDigitalTexto();
                    director.Construye(builderDigitalTexto);
                    reservaAModificar = builderDigitalTexto.obtenerReserva();
                    reservaAModificar.presentacion = new PresentacionTexto();
                } else {
                    const builderDigitalVoz = new BuilderDigitalVoz();
                    director.Construye(builderDigitalVoz);
                    reservaAModificar = builderDigitalVoz.obtenerReserva();
                    reservaAModificar.formato = new FormatoDigital();
                }
            }
            reservaAModificar.libro = book;
            reservaAModificar.usuario = user;

            console.log("Libro: "+reservaAModificar.libro.ID);
            console.log("Usuario: "+reservaAModificar.usuario.ID);
            console.log("Presentacion: "+reservaAModificar.presentacion.presentacion());
            console.log("Formato: "+reservaAModificar.formato.formato());

        await this.bookingRepository.editBooking(id, reservaAModificar);
        }
    }

    async deleteBooking(id: number): Promise<void> {
        await this.bookingRepository.delete(id)
    }
}