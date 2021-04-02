import { Column, Entity } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RowEntity } from './row.entity';

@Entity('user')
export class UserEntity extends RowEntity<UserEntity> {
  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  login: string;

  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  email: string;

  @Column({type: 'varchar', nullable: false, length: 255})
  password: string;

  @Column({type: 'varchar', nullable: true, length: 255})
  avatar: string;

  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  tokenCode: string;

  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  roles: RoleEntity[];
}
