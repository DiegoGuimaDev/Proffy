import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection } from "../entities/Connection";

@Injectable()
export class GetTotalConnectionsService {

    constructor(
        @InjectRepository(Connection)
        private repository: Repository<Connection>,
    ) { }

    public async execute(): Promise<{ total: number }> {
        const total = await this.repository.count();
        return { total };
    }
}