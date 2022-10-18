import { MYSQL_DB_URI } from '@config/environment';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import entities from './entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  url: MYSQL_DB_URI,
  synchronize: false,
  logging: false,
  entities,
  migrations: ['./src/persistence/database/migrations/*.ts'],
  subscribers: [],
});
