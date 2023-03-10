import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { MoviesEntity } from '../model/movies.entity';
import { UsersEntity } from '../model/users.entity';
import { initTable1678478623343 } from '../migrations/1678478623343-init-table';

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
  entities: [MoviesEntity, UsersEntity],
  migrations: [initTable1678478623343],
  synchronize: false,
  logging: true,
  migrationsRun: true,
};

export default databaseConfig;
