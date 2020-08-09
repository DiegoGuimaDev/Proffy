import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableClassSchedule1596660584460 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: 'class_schedules',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_class',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'weekDay',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'from',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'to',
                    type: 'integer',
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
            ],
            foreignKeys: [
                {
                    name: 'class_schedules_fk_classes',
                    columnNames: ['id_class'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'classes',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('class_schedules');
    }
}
