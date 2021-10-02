import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDTO } from './dto/CreateParticipantDTO.dto';

@Injectable()
export class ParticipantsService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.participants.findMany();
  }

  async create(data: CreateParticipantDTO) {
    return await this.prismaService.participants.create({ data });
  }
}
