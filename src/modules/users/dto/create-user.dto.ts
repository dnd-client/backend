import { ApiProperty } from '@nestjs/swagger';
import { ConstructableDto } from '../../../shared';
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsEmail, } from "class-validator";

export class CreateUserDto extends ConstructableDto<CreateUserDto> {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({type: String, description: 'Login'})
  login: string;

  @IsNotEmpty()
  @IsString()
  @Transform((value) => value.value.trim().toLowerCase())
  @ApiProperty({type: String, description: 'Email'})
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({type: String, description: 'Password'})
  password: string;
}