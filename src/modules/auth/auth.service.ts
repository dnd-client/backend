import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {
  }

  register() {

  }
}