import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1596660005308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        return queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: 'avatar',
                    type: 'text',
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: 'bio',
                    type: 'varchar',
                    length: '2000',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: false,
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: false,
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('users');
    }


}
