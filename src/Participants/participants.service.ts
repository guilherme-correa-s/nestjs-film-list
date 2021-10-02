import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDTO } from './dto/CreateParticipantDTO.dto';
import { UpdateParticipantsDTO } from './dto/UpdateParticiapantDTO.dto';

@Injectable()
export class ParticipantsService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.participants.findMany();
  }

  async create(data: CreateParticipantDTO) {
    return await this.prismaService.participants.create({ data });
  }

  async update(data: UpdateParticipantsDTO, id: number) {
    return await this.prismaService.participants.update({
      data,
      where: { id },
    });
  }
}
