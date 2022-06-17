import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from '../../domain/dto/auth/signIn.dto';
import { SignIn } from '../../domain/use-cases/auth';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly signin: SignIn) {}

  @Post('login')
  async login(@Body() signinDto: SignInDto) {
    return this.signin.call(signinDto);
  }
}
