import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690461675488 implements MigrationInterface {
    name = 'InitialMigration1690461675488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Affiliated_Operations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "date" character varying NOT NULL, "product" character varying NOT NULL, "value" character varying NOT NULL, "seller" character varying NOT NULL, CONSTRAINT "PK_be7ae83e4c6071172948a57dac8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Affiliated_Operations"`);
    }

}
