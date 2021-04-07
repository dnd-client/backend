import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly userRepository) {
  }

  @Post("register")
  register() {

  }
}
