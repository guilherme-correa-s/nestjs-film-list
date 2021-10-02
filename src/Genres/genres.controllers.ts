import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGenreDTO } from './dto/CreateGenreDTO.dto';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  async getAll() {
    return this.genresService.getAll();
  }

  @Post()
  async create(@Body() data: CreateGenreDTO) {
    return this.genresService.create(data);
  }
}
