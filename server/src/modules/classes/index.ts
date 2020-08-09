import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ClassController } from "./controllers/ClassController";
import { CreateClassService } from "./services/CreateClassService";
import { ListClassService } from "./services/ListClassService";
import { Class } from "./entities/Class";
import { User } from "./entities/User";
import { ClassSchedule } from "./entities/ClassSchedule";

@Module({
    imports: [
        TypeOrmModule.forFeature([Class, User, ClassSchedule])
    ],
    controllers: [
        ClassController,
    ],
    providers: [
        CreateClassService,
        ListClassService
    ]
})
export class ClassModule {

}