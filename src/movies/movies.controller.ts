import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getTestService() {
    return this.moviesService.test();
  }
}
