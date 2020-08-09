import { Injectable } from "@nestjs/common";
import { Class } from "../entities/Class";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ListClassDto } from "../dtos/ListClassDto";
import convertHourToMinutes from "../../../utils/convertHourToMinutes";

@Injectable()
export class ListClassService {

    constructor(
        @InjectRepository(Class)
        private repository: Repository<Class>,
    ) { }

    async execute({ weekDay, subject, time }: ListClassDto): Promise<Array<Class>> {

        return this.repository.createQueryBuilder('class')
            .innerJoinAndSelect('class.user', 'user')
            .innerJoin('class.schedules', 'schedules')
            .where('lower(class.subject) like lower(:subject)', { subject: `%${subject || ''}%` })
            .andWhere('schedules.weekDay = :weekDay', { weekDay })
            .andWhere('schedules.from <= :time', { time: convertHourToMinutes(time) })
            .andWhere('schedules.to > :time', { time: convertHourToMinutes(time) })
            .getMany()
    }
}