import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection } from "../entities/Connection";
import { CreateConnectionDTO } from "../dtos/CreateConnectionDTO";

@Injectable()
export class CreateConnectionService {

    constructor(
        @InjectRepository(Connection)
        private repository: Repository<Connection>,
    ) { }

    public async execute({ idUser }: CreateConnectionDTO): Promise<void> {



        const newConnection = this.repository.create({
            idUser
        });

        await this.repository.save(newConnection);

    }
}