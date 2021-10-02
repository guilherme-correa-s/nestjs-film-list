import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDTO } from './dto/CreateGenreDTO.dto';

@Injectable()
export class GenresService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.genre.findMany();
  }

  async create(data: CreateGenreDTO) {
    return await this.prismaService.genre.create({ data });
  }
}
