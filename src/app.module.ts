import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards.controller';
import { PostDataController } from './postdata.controller';

@Module({
  imports: [],
  controllers: [AppController,CardsController,PostDataController],
  providers: [AppService],
})
export class AppModule {}
