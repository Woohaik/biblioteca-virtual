import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn
} from "typeorm";


@Entity()
export class ConfirmEmails {
    @PrimaryColumn()
    public ID: string;

    @Column()
    public email: string;

    @CreateDateColumn()
    public CreatedAt: Date;
}