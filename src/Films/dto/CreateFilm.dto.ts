import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateGenreDTO } from 'src/Genres/dto/CreateGenreDTO.dto';
import { CreateParticipantDTO } from 'src/Participants/dto/CreateParticipantDTO.dto';

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
  @IsNotEmpty()
  participants: CreateParticipantDTO[];
}
