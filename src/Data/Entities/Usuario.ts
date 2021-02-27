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

    @Column()
    public Email: string;

    @Column()
    public Name: string;

    @Column()
    public Username: string;

    @Column()
    public Password: string;

    @CreateDateColumn()
    public CreatedAt: Date;

    @UpdateDateColumn()
    public UpdatedAt: Date;
}