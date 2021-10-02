import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmDTO {
  @IsNotEmpty()
  name: string;
  @IsOptional()
  imagem?: string;
  @IsNotEmpty()
  release_date: string;
  @IsNotEmpty()
  duration: string;
}
