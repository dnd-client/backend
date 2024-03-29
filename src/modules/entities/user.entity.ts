import { validateOrReject } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RowEntity } from './row.entity';

@Entity('users')
export class UserEntity extends RowEntity<UserEntity> {
  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  login: string;

  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  email: string;

  @Column({type: 'varchar', nullable: false, length: 255})
  password: string;

  @Column({type: 'varchar', nullable: true, length: 255})
  avatar: string | null;

  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  tokenCode: string;

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
