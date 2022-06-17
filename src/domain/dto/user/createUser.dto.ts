import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'UserName',
    type: String,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MinLength(6)
  @MaxLength(150)
  password: string;
}
