import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { MoviesEntity } from '../model/movies.entity';
import { UsersEntity } from '../model/users.entity';
import { MoviesTagsEntity } from '../model/movies-tags.entity';
import { initTable1678550601695 } from '../migrations/1678550601695-init-table';

config();
const configService = new ConfigService();

const databaseConfig: DataSourceOptions = {
  name: 'default',
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [MoviesEntity, UsersEntity, MoviesTagsEntity],
  migrations: [initTable1678550601695],
  synchronize: false,
  logging: true,
  migrationsRun: true,
};

export default databaseConfig;
