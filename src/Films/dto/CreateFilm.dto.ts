import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
