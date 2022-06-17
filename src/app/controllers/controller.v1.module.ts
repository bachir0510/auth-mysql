import { Module } from '@nestjs/common';
import { AuthModule } from '../../domain/use-cases/auth/auth.module';
import { UserModule } from '../../domain/use-cases/user/user.module';
import { AuthController } from './auth.controller';
import { UserController } from './user.controller';


@Module({
  imports: [ UserModule, AuthModule],
  controllers: [ UserController, AuthController],
})
export class ControllerV1Module {}
