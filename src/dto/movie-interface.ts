import { IsNotEmpty } from 'class-validator';

export class MovieInterface {
  @IsNotEmpty()
  title: string;

  overview: string;
  poster: string;
}
