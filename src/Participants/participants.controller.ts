import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateParticipantDTO } from './dto/CreateParticipantDTO.dto';
import { ParticipantsService } from './participants.service';

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) {}

  @Get()
  async getAll() {
    return await this.participantsService.getAll();
  }

  @Post()
  async create(@Body() data: CreateParticipantDTO) {
    return await this.participantsService.create(data);
  }
}
