import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MovieTagsService } from '../movie-tags/movie-tags.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Inject(HttpService)
  private readonly httpService: HttpService;

  @Inject(MovieTagsService)
  private readonly movieTagsService: MovieTagsService;

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.logger.log('This task run on cron job');
    this.httpService.get('https://dummyjson.com/products').forEach((result) => {
      result.data.products.forEach((product) => {
        this.movieTagsService.create({
          tag_name: product.title,
        });
      });
    });
  }
}
