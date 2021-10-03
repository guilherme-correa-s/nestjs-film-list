import { Filme } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDTO } from './dto/CreateFilm.dto';
import { UpdateFilmDTO } from './dto/UpdateFilm.dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany({
      include: { genre: true, participants: true },
    });
  }

  async create(data: CreateFilmDTO): Promise<Filme> {
    const conectGenres = [];
    const conectParticipants = [];

    await Promise.all(
      data.movie_genre.map(async (item) => {
        const exist = await this.prisma.genre.findUnique({
          where: { movie_genre: String(item) },
        });
        if (exist) conectGenres.push({ movie_genre: item });
      }),
    );

    await Promise.all(
      data.participants.map(async (participant) => {
        const exist = await this.prisma.participants.findUnique({
          where: { id: Number(participant) },
        });
        if (exist) conectParticipants.push({ id: participant });
      }),
    );

    const film = {
      name: data.name,
      imagem: data.imagem,
      release_date: data.release_date,
      duration: data.duration,
    };

    return await this.prisma.filme.create({
      data: {
        ...film,
        genre: { connect: conectGenres },
        participants: { connect: conectParticipants },
      },
      include: { genre: true, participants: true },
    });
  }

  async update(id: number, data: UpdateFilmDTO): Promise<Filme> {
    const film = {
      name: data.name,
      imagem: data.imagem,
      release_date: data.release_date,
      duration: data.duration,
    };
    return await this.prisma.filme.update({ data: { ...film }, where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
