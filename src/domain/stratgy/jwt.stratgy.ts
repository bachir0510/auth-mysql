import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entity/user.entity';
import { JwtPayload } from '../interface/jwtPayload.interface';
import { SignIn } from '../use-cases/auth';
import { FindByEmail } from '../use-cases/user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly findByEmail: FindByEmail) {
    super({
      secretOrKey: 'secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(paylaod: JwtPayload): Promise<User> {
    const user = this.findByEmail.call(paylaod.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}