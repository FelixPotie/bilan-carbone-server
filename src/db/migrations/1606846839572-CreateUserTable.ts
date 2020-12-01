import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1606846839572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "firstname",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "lastname",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "courses",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "school_year",
                    type: "integer",
                    isNullable: false
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable("users");
    }

}
