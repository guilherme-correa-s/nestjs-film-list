import { Controller, Get } from '@nestjs/common';
import { ParticipantsService } from './participants.service';

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) {}

  @Get()
  async getAll() {
    return await this.participantsService.getAll();
  }
}
