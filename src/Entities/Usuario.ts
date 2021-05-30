import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Usuario implements IUser {
    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public LastName: string;

    @Column()
    public Username: string;

    @Column({ unique: true })
    public Email: string;

    @Column()
    public Password: string;

    @Column()
    public ConfirmedEmail: boolean;

    @Column({ default: "user" })
    public Rol?: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;

}