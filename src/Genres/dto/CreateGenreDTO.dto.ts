import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDTO {
  @IsNotEmpty()
  @IsString()
  movie_genre: string;
}
