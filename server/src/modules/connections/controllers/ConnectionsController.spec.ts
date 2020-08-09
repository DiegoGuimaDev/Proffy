import { Test } from '@nestjs/testing';
import { ConnectionsController } from './ConnectionsController';
import { GetTotalConnectionsService } from '../services/GetTotalConnectionsService';
import { CreateConnectionService } from '../services/CreateConnectionService';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from '../entities/Connection';

describe('ConnectionsController', () => {
    let connectionsController: ConnectionsController;
    let getTotalConnectionsService: GetTotalConnectionsService;
    let createConnectionService: CreateConnectionService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [ConnectionsController],
            providers: [
                GetTotalConnectionsService,
                CreateConnectionService,
                {
                    provide: getRepositoryToken(Connection),
                    useValue: () => ({})
                }
            ],
        }).compile();

        connectionsController = moduleRef.get<ConnectionsController>(ConnectionsController);
        getTotalConnectionsService = moduleRef.get<GetTotalConnectionsService>(GetTotalConnectionsService);
        createConnectionService = moduleRef.get<CreateConnectionService>(CreateConnectionService);
    });

    describe('index', () => {
        it('should execute getTotalConnectionsService', async () => {
            const executeSpy = jest.spyOn(getTotalConnectionsService, 'execute')
                .mockImplementationOnce(async () => {
                    return null;
                });

            await connectionsController.index();

            expect(executeSpy).toHaveBeenCalled();
        });
    });

    describe('create', () => {
        it('should execute createConnectionService with idUser', async () => {
            const executeSpy = jest.spyOn(createConnectionService, 'execute')
                .mockImplementationOnce(async () => {
                    return null;
                });


            await connectionsController.create({ idUser: '123456' });

            expect(executeSpy).toHaveBeenCalledWith({ idUser: '123456' });
        });
    });
});