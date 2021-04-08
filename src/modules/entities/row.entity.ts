import {CreateDateColumn, PrimaryGeneratedColumn} from 'typeorm';

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export abstract class ConstructableEntity<T = ConstructableEntity<Record<string, unknown>>> {
  constructor(dto?: Pick<T, NonFunctionPropertyNames<T>>) {
    if (dto) {
      Object.assign(this, dto);
    }
  }
}

export class RowEntity<T = RowEntity<Record<string, unknown>>> extends ConstructableEntity<T> {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at?: Date;
}
