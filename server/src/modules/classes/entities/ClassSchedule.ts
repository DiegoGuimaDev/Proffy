import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Class } from "./Class";

@Entity('class_schedules')
export class ClassSchedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'id_class' })
    idClass: string;

    @JoinColumn({
        name: 'id_class',
        referencedColumnName: 'id'
    })
    @ManyToOne(() => Class, clasz => clasz.schedules)
    clasz: Class;

    @Column()
    weekDay: number;

    @Column()
    from: number;

    @Column()
    to: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}