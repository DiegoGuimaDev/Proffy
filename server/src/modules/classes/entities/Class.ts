import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { ClassSchedule } from "./ClassSchedule";

@Entity('classes')
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'id_user' })
    idUser: string;

    @JoinColumn({
        name: 'id_user',
        referencedColumnName: 'id'
    })
    @ManyToOne(() => User, user => user.classes)
    user: User;


    @OneToMany(() => ClassSchedule, classSchedule => classSchedule.clasz)
    schedules: ClassSchedule[];

    @Column()
    subject: string;

    @Column()
    cost: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}