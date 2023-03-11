import { IsNotEmpty } from 'class-validator';

export class MovieTagsDto {
  @IsNotEmpty()
  tag_name: string;
}
