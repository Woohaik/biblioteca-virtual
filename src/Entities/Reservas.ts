import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Libro } from "./Libro";
import { Usuario } from "./Usuario";


@Entity()
export class Booking implements IBooking {

    @PrimaryGeneratedColumn()
    public ID: number;


    @Column()
    public BookId: number;
    @ManyToOne(() => Libro, (libro) => libro.ID, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: "BookId" })
    public Book: Libro;


    @Column()
    public UserId: number;
    @ManyToOne(() => Usuario, (usuario) => usuario.ID, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: "UserId" })
    public User: Usuario;

    @Column()
    public Format: string; 

    @Column()
    public Presentation: string; 

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date; 


}