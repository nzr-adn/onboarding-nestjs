import { Injectable, Logger } from '@nestjs/common';
import { MovieTagsDto } from '../dto/movie-tags.dto';
import { MoviesTagsEntity } from '../model/movies-tags.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieTagsService {
  @InjectRepository(MoviesTagsEntity)
  private readonly movieTagsRepository: Repository<MoviesTagsEntity>;
  private readonly logger = new Logger(MovieTagsService.name);

  create(payload: MovieTagsDto): Promise<MoviesTagsEntity> {
    const movieTag = new MoviesTagsEntity();
    movieTag.tag_name = payload.tag_name;
    this.logger.log('Insert Movie Tag');
    return this.movieTagsRepository.save(movieTag);
  }
}
