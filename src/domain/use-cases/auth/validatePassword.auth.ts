import { Injectable } from '@nestjs/common';
import { SignInDto } from '../../dto/auth/signIn.dto';
import { compare } from 'bcryptjs';
import { JwtPayload } from '../../interface/jwtPayload.interface';
import { FindByEmail } from '../user/findByEmail.user';

@Injectable()
export class ValidatePassword {
  constructor(private readonly findByEmail: FindByEmail) {}

  async call(signinDto: SignInDto): Promise<JwtPayload> {
    const { email } = signinDto;
    const user = await this.findByEmail.call(email);

    if (
      user &&
      (await this.checkPassword.call(signinDto.password, user.password))
    ) {
      return {
        id: user.id,
        email: user.email,
      };
    } else {
      return null;
    }
  }

  async checkPassword(password: string, userPassword: string) {
    return compare(password, userPassword);
  }
}
