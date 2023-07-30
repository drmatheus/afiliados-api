import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690550475760 implements MigrationInterface {
    name = 'InitialMigration1690550475760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Affiliated_Operations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "date" character varying NOT NULL, "product" character varying NOT NULL, "value" character varying NOT NULL, "seller" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_be7ae83e4c6071172948a57dac8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Affiliated_Operations" ADD CONSTRAINT "FK_43f0c3af40dd63e761b049015b1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Affiliated_Operations" DROP CONSTRAINT "FK_43f0c3af40dd63e761b049015b1"`);
        await queryRunner.query(`DROP TABLE "Affiliated_Operations"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
