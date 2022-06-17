import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { userProvider } from '../../../infrastructure/database/providers/user.provider';
import { CreateUser, GetUsers, FindByEmail } from './';

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, CreateUser, GetUsers, FindByEmail],
  exports: [CreateUser, GetUsers, FindByEmail],
})
export class UserModule {}
