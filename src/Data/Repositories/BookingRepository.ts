import { injectable } from "inversify";
import { getConnection, Repository } from "typeorm";
import { Booking } from "../../Entities/Reservas"

@injectable()
export class BookingRepository implements IBookingRepository {
    private bookingConnection: Repository<Booking>;
    constructor() {
        const conn = getConnection();
        this.bookingConnection = conn.getRepository(Booking);
    }
    edit(id: number, entity: IBooking): Promise<void> {
        console.log(id);
        console.log(entity);
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        console.log(id);

        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<IBooking | undefined> {
        return await this.bookingConnection.findOne(id)
    }

    async save(entity: IBooking): Promise<void> {
        await this.bookingConnection.insert({
            User: entity.User,
            Book: entity.Book,
            StartDate: entity.StartDate,
            EndDate: entity.EndDate,
        });
    }

    async getAll(): Promise<IBooking[]> {
        return await this.bookingConnection.find()
    }
}
