import { Column, Entity } from 'typeorm';
import { RowEntity } from './row.entity';

@Entity('role')
export class RoleEntity extends RowEntity<RoleEntity> {
  @Column({type: 'varchar', length: 255, nullable: false})
  name: string;
}
