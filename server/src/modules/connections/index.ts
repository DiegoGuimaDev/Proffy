import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ConnectionsController, } from "./controllers/ConnectionsController";
import { CreateConnectionService } from "./services/CreateConnectionService";
import { GetTotalConnectionsService } from "./services/GetTotalConnectionsService";
import { Connection } from "./entities/Connection";

@Module({
    imports: [
        TypeOrmModule.forFeature([Connection])
    ],
    controllers: [
        ConnectionsController
    ],
    providers: [
        CreateConnectionService,
        GetTotalConnectionsService
    ]
})
export class ConnectionsModule {

}