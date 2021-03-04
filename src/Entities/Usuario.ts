import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class Usuario implements IUser {
    @PrimaryGeneratedColumn()
    public ID: string;

    @Column({ unique: true })
    public Email: string;

    @Column() 
    public ConfirmedEmail: boolean;

    @Column()
    public Name: string;

    @Column()
    public LastName: string;

    @Column()
    public Username: string;

    @Column()
    public Password: string;

    @Column({ nullable: true })
    public RefreshToken: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}