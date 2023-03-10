import { Module } from '@nestjs/common';
import { MovieTagsService } from './movie-tags.service';

@Module({
  providers: [MovieTagsService]
})
export class MovieTagsModule {}
