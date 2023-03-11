import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MoviesEntity } from '../model/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieInterface } from '../dto/movie-interface';

@Injectable()
export class MoviesService {
  @InjectRepository(MoviesEntity)
  private readonly moviesRepository: Repository<MoviesEntity>;

  test(): string {
    return 'Movies Service Work !';
  }

  create(payload: MovieInterface): Promise<MoviesEntity> {
    const movie = new MoviesEntity();
    movie.title = payload.title;
    movie.overview = payload.overview;
    movie.poster = payload.poster;
    return this.moviesRepository.save(movie);
  }
}
