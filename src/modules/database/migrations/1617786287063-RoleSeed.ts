import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RoleSeed } from '../seeds/RoleSeed';

export class RoleSeed1617786287063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("roles").save(RoleSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
