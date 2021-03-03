import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class Libro implements IBook {
    @PrimaryGeneratedColumn()
    public ID: string;

    @Column()
    public Nombre: string;

    @Column()
    public Autor: string;

    @Column()
    public Genero: string;

    @Column()
    public Calificacion: number;

    @Column()
    public ISBN: string;

    @Column()
    public Editorial: string;

    @Column()
    public Sinopsis: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}