import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateParticipantDTO } from './dto/CreateParticipantDTO.dto';
import { UpdateParticipantsDTO } from './dto/UpdateParticiapantDTO.dto';
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

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() data: UpdateParticipantsDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.participantsService.update(data, id);
  }
}
