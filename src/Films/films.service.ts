import { Filme, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDTO } from './dto/CreateFilm.dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async create(data: CreateFilmDTO): Promise<Filme> {
    return await this.prisma.filme.create({ data });
  }

  async update(id: number, data: Prisma.FilmeCreateInput): Promise<Filme> {
    return await this.prisma.filme.update({ data, where: { id } });
  }
}
