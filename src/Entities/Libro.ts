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
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Genre: string;

    @Column()
    public Author: string;

    @Column()
    public Synopsis: string;

    @Column({ nullable: true })
    public PublicationYear: number;

    @Column()
    public Rate: number;

    @Column()
    public Editorial: string;

    @Column()
    public ISBN: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}