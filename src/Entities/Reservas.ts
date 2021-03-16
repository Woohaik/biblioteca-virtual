import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Libro } from "./Libro";
import { Usuario } from "./Usuario";


@Entity()
export class Booking implements IBooking {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => Libro, (libro) => libro.ID)
    Book: Libro;

    @ManyToOne(() => Usuario, (usuario) => usuario.ID)
    User: Usuario;

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;


}