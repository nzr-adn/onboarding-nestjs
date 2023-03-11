import { Module } from '@nestjs/common';
import { MovieTagsService } from './movie-tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesTagsEntity } from '../model/movies-tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesTagsEntity])],
  providers: [MovieTagsService],
  exports: [MovieTagsService],
})
export class MovieTagsModule {}
