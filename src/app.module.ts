import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockModule } from './block/block.module';

@Module({
  imports: [BlockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
