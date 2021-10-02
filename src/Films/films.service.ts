import { Filme } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDTO } from './dto/CreateFilm.dto';
import { UpdateFilmDTO } from './dto/UpdateFilm.dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async create(data: CreateFilmDTO): Promise<Filme> {
    return await this.prisma.filme.create({ data });
  }

  async update(id: number, data: UpdateFilmDTO): Promise<Filme> {
    return await this.prisma.filme.update({ data, where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
