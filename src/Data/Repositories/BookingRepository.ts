import { injectable } from "inversify";
import { Booking } from "../../Entities/Reservas"
import { getConnection, Repository } from "typeorm";

@injectable()
export class BookingRepository implements IBookingRepository {
    private bookingConnection: Repository<Booking>;
    constructor() {
        const conn = getConnection();
        this.bookingConnection = conn.getRepository(Booking); //Booking
    }
    
    async getAll(): Promise<IBooking[]> {
        return await this.bookingConnection.find({relations: ["User" , "Book"]});
    }

    async getById(id: number): Promise<IBooking | undefined> {
        return await this.bookingConnection.findOne(id)
    }

    async saveBooking(entity: IReservaProducto): Promise<void> {
        console.log("Entidad: "+entity);
        console.log("GG"+entity.usuario.ID);
        // console.log("Lol: "+entity.presentacion.presentacion());
        // PresentacionTexto
        
        await this.bookingConnection.insert({
            UserId: entity.usuario.ID,
            BookId: entity.libro.ID,
            Format: entity.formato.formato(),
            Presentation: entity.presentacion.presentacion(),
            StartDate: entity.StartDate,
            EndDate: entity.EndDate
        });
    }

    async editBooking(id: number, entity: IReservaProducto): Promise<void> {
        console.log(entity);
        console.log(id);

        console.log("GG"+entity.usuario.ID);
        console.log("GG"+entity.libro.ID);
        console.log("Lol: "+entity.presentacion.presentacion());
        
                
        await this.bookingConnection.update(id, {
            UserId: entity.usuario.ID,
            BookId: entity.libro.ID,
            Format: entity.formato.formato(),
            Presentation: entity.presentacion.presentacion(),
            StartDate: entity.StartDate,
            EndDate: entity.EndDate
        });
    }
    
    async delete(id: number): Promise<void> {
        console.log(id);        
        await this.bookingConnection.delete(id);
    }

    edit(id: number, entity: IBooking): Promise<void> {
        console.log(id);
        console.log(entity);
        throw new Error("Method not implemented.");
    }
    
    async save(entity: IBooking): Promise<void> {
        console.log(entity);
        throw new Error("Method not implemented.");
    }
}
