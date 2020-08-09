import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClassModule } from './modules/classes';
import { ConnectionsModule } from './modules/connections';
import { ConfigModule } from '@nestjs/config';

const getMergedTypeormOptions = () => {
  return {
    "type": process.env.TYPEORM_CONNECTION,
    "port": process.env.TYPEORM_PORT,
    "host": process.env.TYPEORM_HOST,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "logging": process.env.TYPEORM_LOGGING,
    autoLoadEntities: true
  } as TypeOrmModuleOptions
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getMergedTypeormOptions()),
    ClassModule,
    ConnectionsModule
  ],
})
export class AppModule { }
