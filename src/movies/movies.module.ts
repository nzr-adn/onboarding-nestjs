import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesEntity } from '../model/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
