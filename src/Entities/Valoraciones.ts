import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";


@Entity()
export class Valoraciones implements IValoraciones {
    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public UserId: number;

    @Column()
    public BookId: number;

    @Column()
    public Rate: number;

    @Column()
    public Commentary: string;

    @CreateDateColumn()
    public CreatedAt: Date;
}