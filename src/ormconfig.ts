import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
  synchronize: false,
  migrations: [join(__dirname, '/migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
