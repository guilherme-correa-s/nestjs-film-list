import { Controller, Get } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  async getAll() {
    return this.genresService.getAll();
  }
}
