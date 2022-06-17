import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { userProvider } from '../../../infrastructure/database/providers/user.provider';
import { JwtStrategy } from '../../stratgy/jwt.stratgy';
import { JwtRefreshStrategy } from '../../stratgy/refreshToken.stratgy';
import { UserModule } from '../user/user.module';
import {
  SignIn,
  GetRefreshToken,
  AccessToken,
  UpdateRefreshToken,
  ValidatePassword,
} from './';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    DatabaseModule,
    UserModule,
  ],
  providers: [
    ...userProvider,
    SignIn,
    GetRefreshToken,
    AccessToken,
    UpdateRefreshToken,
    ValidatePassword,
    JwtStrategy,
    JwtRefreshStrategy,
    PassportModule,
  ],
  exports: [
    SignIn,
    GetRefreshToken,
    AccessToken,
    UpdateRefreshToken,
    ValidatePassword,
    JwtStrategy,
    JwtRefreshStrategy,
    PassportModule,
  ],
})
export class AuthModule {}
