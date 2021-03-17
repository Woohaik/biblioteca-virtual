import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,

    PrimaryColumn
} from "typeorm";
import { Libro } from "./Libro";
import { Usuario } from "./Usuario";


@Entity()
export class Booking implements IBooking {

    @PrimaryGeneratedColumn()
    public ID: number;


    @PrimaryColumn()
    public BookId: number;
    @ManyToOne(() => Libro, (libro) => libro.ID)
    @JoinColumn({ name: "BookId" })
    public Book: Libro;


    @PrimaryColumn()
    public UserId: number;
    @ManyToOne(() => Usuario, (usuario) => usuario.ID)
    @JoinColumn({ name: "UserId" })
    public User: Usuario;

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date; 


}