import { Body, Controller, Get, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieInterface } from '../dto/movie-interface';
import { MoviesEntity } from '../model/movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('test')
  getTestService() {
    return this.moviesService.test();
  }

  @Post()
  create(@Body() payload: MovieInterface): Promise<MoviesEntity> {
    return this.moviesService.create(payload);
  }
}
