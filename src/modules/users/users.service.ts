import { Injectable } from '@nestjs/common';
import { ERoles } from '../../shared';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { UserRoleRepository } from './repository/userRole.repository';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userRoleRepository: UserRoleRepository,
  ) {
  }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    await this.userRepository.checkUserByEmail(createUserDto.email);
    await this.userRepository.checkUserByLogin(createUserDto.login);

    const defaultRole = await this.userRoleRepository.findOne({ name: ERoles.USER });
    const cryptPassword = this.hashPassword(createUserDto.password);
    const user = new UserEntity({
      ...createUserDto,
      password: cryptPassword,
      role: defaultRole,
      avatar: null,
      tokenCode: uuid.v4(),
    });
    await this.userRepository.save(user)
  }

  hashPassword(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  validatePassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
