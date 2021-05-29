import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,

}
 from "typeorm";
import { Libro } from "./Libro";
import { Usuario } from "./Usuario";

@Entity()
export class Valoraciones implements IReview {
    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public UserId: number;
    @ManyToOne(() => Usuario, (usuario) => usuario.ID, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: "UserId" })
    public User: Usuario;

    @Column()
    public BookId: number;
    @ManyToOne(() => Libro, (libro) => libro.ID, {
        onDelete: 'CASCADE'
    })

    @Column()
    public Rate: number;

    @Column()
    public Commentary: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @JoinColumn({ name: "BookId" })
    public Book: Libro;
}