import { Connection } from 'typeorm';
import { User } from '../../../domain/entity/user.entity';

export const userProvider = [
  {
    provide: User.name,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
