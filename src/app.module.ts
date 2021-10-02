import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './Films/films.module';
import { GenresModule } from './Genres/genres.module';
import { ParticipantsModule } from './Participants/participants.module';

@Module({
  imports: [FilmsModule, GenresModule, ParticipantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
