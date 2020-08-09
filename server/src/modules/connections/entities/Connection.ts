import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, } from "typeorm";

@Entity('connections')
export class Connection {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'id_user' })
    idUser: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

}