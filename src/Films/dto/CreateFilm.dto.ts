import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateGenreDTO } from 'src/Genres/dto/CreateGenreDTO.dto';

export class CreateFilmDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  imagem?: string;
  @IsNotEmpty()
  @IsString()
  release_date: string;
  @IsNotEmpty()
  @IsString()
  duration: string;
  @IsNotEmpty()
  movie_genre: CreateGenreDTO[];
}
