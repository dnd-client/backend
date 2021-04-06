import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RoleEntity } from '../../entities/role.entity';
import { RoleSeed } from '../seeds/RoleSeed';

export class RoleSeed1617709765990 implements MigrationInterface {
  name = 'RoleSeed1617709765990';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const roles = await queryRunner.manager.find(RoleEntity);
    const updatedRoles = roles.map((role, i) => {
      role.name = RoleSeed[i].name;
      return role
    });
    await queryRunner.manager.save(updatedRoles);
    await queryRunner.commitTransaction();
  }

  public async down(_: QueryRunner): Promise<void> {
  }

}
