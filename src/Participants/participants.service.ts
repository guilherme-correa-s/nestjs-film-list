import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.participants.findMany();
  }

  async create(data) {
    return await this.prismaService.participants.create({ data });
  }
}
