import { createConnection } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const fn = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'root_db',
        entities: [path.resolve(__dirname + '/../../**/*.entity{.ts,.js}')],
        synchronize: true,
      });
      return fn;
    },
  },
];
