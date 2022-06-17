import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  const options = new DocumentBuilder()
    .setTitle('School API')
    .addBearerAuth()
    .setDescription('The Students API description')
    .setVersion('1.0')
    .build();
  const documentV1 = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, documentV1);
  Logger.log('Swagger configured');

  await app.listen(3000);
}
bootstrap();
