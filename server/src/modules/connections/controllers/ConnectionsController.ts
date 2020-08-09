import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateConnectionDTO } from '../dtos/CreateConnectionDTO';
import { GetTotalConnectionsService } from '../services/GetTotalConnectionsService';
import { CreateConnectionService } from '../services/CreateConnectionService';

@Controller('connections')
export class ConnectionsController {

    constructor(
        private readonly getTotalConnectionsService: GetTotalConnectionsService,
        private readonly createConnectionService: CreateConnectionService,
    ) { }

    @Get()
    async index(): Promise<{ total: number }> {
        return this.getTotalConnectionsService.execute();
    }

    @Post()
    async create(
        @Body() dto: CreateConnectionDTO
    ): Promise<void> {
        return this.createConnectionService.execute(dto);
    }

}
