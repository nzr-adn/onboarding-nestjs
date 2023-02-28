import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MoviesEntity } from '../model/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  @InjectRepository(MoviesEntity)
  private readonly moviesRepository: Repository<MoviesEntity>;

  test(): string {
    return 'Movies Service Work !';
  }
}
