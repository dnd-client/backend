import { Column, Entity, OneToMany } from 'typeorm';
import { ERoles } from '../../shared';
import { RowEntity } from './row.entity';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity extends RowEntity<RoleEntity> {
  @Column({type: 'varchar', length: 255, nullable: false, enum: ERoles})
  name: string;

  @OneToMany(() => UserEntity, user => user.role)
  user: UserEntity;
}
