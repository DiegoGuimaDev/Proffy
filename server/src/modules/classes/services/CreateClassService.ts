import { Injectable } from "@nestjs/common";
import { CreateClassDto } from "../dtos/CreateClassDto";
import { Class } from "../entities/Class";
import { User } from "../entities/User";
import convertHourToMinutes from "../../../utils/convertHourToMinutes";
import { ClassSchedule } from "../entities/ClassSchedule";
import { Connection } from "typeorm";

@Injectable()
export class CreateClassService {

    constructor(

        private connection: Connection
    ) { }


    async execute({ bio, whatsapp, name, avatar, subject, cost, schedules }: CreateClassDto): Promise<Class> {

        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const newUser = queryRunner.manager.create(User, {
                bio, whatsapp, name, avatar
            })

            await queryRunner.manager.save(User, newUser);

            const newClass = queryRunner.manager.create(Class, {
                subject, cost, idUser: newUser.id
            })

            await queryRunner.manager.save(Class, newClass);

            const classSchedules = schedules.map(({ weekDay, from, to }) => ({
                weekDay,
                from: convertHourToMinutes(from),
                to: convertHourToMinutes(to),
                idClass: newClass.id
            }));

            const newClassSchedules = queryRunner.manager.create(ClassSchedule, classSchedules);

            await queryRunner.manager.save(ClassSchedule, newClassSchedules);

            await queryRunner.commitTransaction();

            return newClass;

        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        } finally {
            await queryRunner.release();
        }


    }
}