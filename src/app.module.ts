import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerV1Module } from './app/controllers/controller.v1.module';

@Module({
  imports: [ControllerV1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
