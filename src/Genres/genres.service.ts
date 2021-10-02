import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDTO } from './dto/CreateGenreDTO.dto';
import { UpdateGenreDTO } from './dto/UpdateGenreDTO.dto';

@Injectable()
export class GenresService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.genre.findMany();
  }

  async create(data: CreateGenreDTO) {
    return await this.prismaService.genre.create({ data });
  }

  async update(id: number, data: UpdateGenreDTO) {
    return await this.prismaService.genre.update({ data, where: { id } });
  }

  async delete(id: number) {
    return await this.prismaService.genre.delete({ where: { id } });
  }
}
