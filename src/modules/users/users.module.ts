import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { UserRoleRepository } from './repository/userRole.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      UserRoleRepository
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
