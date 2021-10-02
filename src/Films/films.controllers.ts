import { Filme } from '.prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFilmDTO } from './dto/CreateFilm.dto';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private filmService: FilmsService) {}

  @Get()
  async findMany(): Promise<Filme[]> {
    return this.filmService.getAll();
  }

  @Post()
  async create(@Body() createFilm: CreateFilmDTO): Promise<Filme> {
    return this.filmService.create(createFilm);
  }
}
