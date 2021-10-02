import { CreateFilmDTO } from './CreateFilm.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFilmDTO extends PartialType(CreateFilmDTO) {}
