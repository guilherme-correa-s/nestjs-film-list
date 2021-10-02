import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './Films/films.module';
import { GenresModule } from './Genres/genres.module';

@Module({
  imports: [FilmsModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
