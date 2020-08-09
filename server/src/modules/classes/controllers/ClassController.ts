import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { Class } from "../entities/Class";
import { ListClassService } from "../services/ListClassService";
import { CreateClassService } from "../services/CreateClassService";
import { CreateClassDto } from "../dtos/CreateClassDto";
import { ListClassDto } from "../dtos/ListClassDto";

@Controller('classes')
export class ClassController {

    constructor(
        private readonly listClassService: ListClassService,
        private readonly createClassService: CreateClassService,
    ) { }

    @Get()
    async index(
        @Query() filters: ListClassDto
    ): Promise<Array<Class>> {
        return this.listClassService.execute(filters);
    }

    @Post()
    async create(
        @Body() dto: CreateClassDto
    ): Promise<Class> {
        return this.createClassService.execute(dto);
    }


}