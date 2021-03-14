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
    public ID: number;

    @Column()
    public UserId: number;

    @Column()
    public BookId: number;

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}