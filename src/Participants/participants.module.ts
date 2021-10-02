import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ParticipantsService } from './participants.service';

@Module({
  imports: [PrismaModule],
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
})
export class ParticipantsController {}
