import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableClasses1596660384563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: 'classes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_user',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'subject',
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
                {
                    name: 'cost',
                    type: 'decimal',
                    scale: 2,
                    precision: 10,
                    isNullable: false
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
            ],
            foreignKeys: [
                {
                    name: 'classes_fk_users',
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('classes');
    }


}
