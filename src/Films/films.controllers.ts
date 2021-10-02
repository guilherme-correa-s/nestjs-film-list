import { Filme } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFilmDTO } from './dto/CreateFilm.dto';
import { UpdateFilmDTO } from './dto/UpdateFilm.dto';
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
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFilmDTO,
  ) {
    return this.filmService.update(id, data);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.filmService.delete(id);
  }
}
