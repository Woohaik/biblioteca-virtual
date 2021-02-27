import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";


@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    public id: string;
    @Column()
    public email: string;
    @Column()
    public  name: string;
    @Column()
    public password: string;
}