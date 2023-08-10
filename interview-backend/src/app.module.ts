import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesController } from './cities/cities.controller';

@Module({
  imports: [],
  controllers: [AppController, CitiesController],
  providers: [AppService],
})
export class AppModule {}
