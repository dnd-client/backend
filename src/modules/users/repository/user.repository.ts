import { EntityRepository, Repository } from 'typeorm';
import { errors } from '../../../errors';
import { UserEntity } from '../../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async getUserByEmail(email: string): Promise<UserEntity> {
    return this.findOne({email});
  }

  async getUserByLogin(login: string): Promise<UserEntity> {
    return this.findOne({login});
  }

  async checkUserByEmail(email: string): Promise<void> {
    const user = await this.getUserByEmail(email);
    if (user) {
      throw errors.EmailAlreadyExists
    }
  }

  async checkUserByLogin(login: string): Promise<void> {
    const user = await this.getUserByLogin(login);
    if (user) {
      throw errors.LoginAlreadyExists
    }
  }
}
