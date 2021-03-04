import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class Booking implements IBooking {
    @PrimaryGeneratedColumn()
    public ID: string;

    @Column()
    public IdUser: string;

    @Column()
    public IdBook: string;

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}