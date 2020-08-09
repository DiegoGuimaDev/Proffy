import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Repository } from 'typeorm';
import { Connection } from '../src/modules/connections/entities/Connection';
import { uuid } from 'uuidv4';
import { User } from '../src/modules/classes/entities/User';

describe('ConnectionsController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<Connection>;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    repository = moduleFixture.get('ConnectionRepository')
    userRepository = moduleFixture.get('UserRepository');

  });

  beforeEach(async () => {
    await repository.delete({});
    await userRepository.delete({});
  })



  describe('/ (GET)', () => {
    it('should be return a object with total connections', () => {
      return request(app.getHttpServer())
        .get('/connections')
        .expect(200)
        .expect({ total: 0 });
    })

    it('should be return a new total connections when a new connection is registered', async () => {
      const newUser = userRepository.create({
        name: 'Teste User',
        whatsapp: '99999999999',
        avatar: 'avatar-url',
        bio: 'Bio new user'
      });

      await userRepository.save(newUser);

      await request(app.getHttpServer())
        .post('/connections')
        .send({
          idUser: newUser.id
        })
      return request(app.getHttpServer())
        .get('/connections')
        .expect(200)
        .expect({ total: 1 });
    })
  })


  describe('/ (POST)', () => {
    it('should be create a new connection for a user', async () => {

      const newUser = userRepository.create({
        name: 'Teste User',
        whatsapp: '99999999999',
        avatar: 'avatar-url',
        bio: 'Bio new user'
      });

      await userRepository.save(newUser);

      return request(app.getHttpServer())
        .post('/connections')
        .send({
          idUser: newUser.id
        })
        .expect(201);
    })
  })

  it('should be return a bad request with status 400 if pass a invalid uuid', () => {
    return request(app.getHttpServer())
      .post('/connections')
      .send({
        idUser: 'invalid-uuid'
      })
      .expect(400);
  })

  it('should be return a bad request with status 400 if pass a nonexistent idUser', () => {
    return request(app.getHttpServer())
      .post('/connections')
      .send({
        idUser: uuid()
      })
      .expect(400);
  })
});
