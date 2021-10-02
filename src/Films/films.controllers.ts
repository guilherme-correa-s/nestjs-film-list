import { Filme } from '.prisma/client';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { timeStamp } from 'console';
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
  async create(@Body() data: CreateFilmDTO): Promise<Filme> {
    return this.filmService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateFilmDTO) {
    return this.filmService.update(id, data);
  }
}
