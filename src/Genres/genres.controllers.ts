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
import { CreateGenreDTO } from './dto/CreateGenreDTO.dto';
import { UpdateGenreDTO } from './dto/UpdateGenreDTO.dto';
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

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateGenreDTO,
  ) {
    return this.genresService.update(id, data);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.delete(id);
  }
}
