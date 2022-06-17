import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
  })
  @IsNotEmpty()
  @Length(6, 50)
  password: string;
}