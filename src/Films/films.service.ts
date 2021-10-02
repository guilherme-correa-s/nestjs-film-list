import { Filme } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDTO } from './dto/CreateFilm.dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async create(film: CreateFilmDTO): Promise<Filme> {
    return await this.prisma.filme.create({ data: film });
  }
}
