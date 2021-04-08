import { EntityRepository, Repository } from 'typeorm';
import { RoleEntity } from '../../entities/role.entity';

@EntityRepository(RoleEntity)
export class UserRoleRepository extends Repository<RoleEntity> {}
