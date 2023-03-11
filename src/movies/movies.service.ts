import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MoviesEntity } from '../model/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieInterface } from '../dto/movie-interface';

@Injectable()
export class MoviesService {
  @InjectRepository(MoviesEntity)
  private readonly moviesRepository: Repository<MoviesEntity>;

  private readonly logger = new Logger();

  test(): string {
    return 'Movies Service Work !';
  }

  create(payload: MovieInterface): Promise<MoviesEntity> {
    const movie = new MoviesEntity();
    movie.title = payload.title;
    movie.overview = payload.overview;
    movie.poster = payload.poster;
    this.logger.log('Insert Movie');
    return this.moviesRepository.save(movie);
  }
}
