import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDTO } from './CreateGenreDTO.dto';

export class UpdateGenreDTO extends PartialType(CreateGenreDTO) {}
