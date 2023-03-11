import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { MovieTagsModule } from '../movie-tags/movie-tags.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, MovieTagsModule],
  providers: [TaskService],
})
export class TaskModule {}
