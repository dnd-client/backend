import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({path: '.env'});
  const appPort = process.env.BACKEND_PORT || 3000;

  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });
  app.enableCors({
    origin: ['http://localhost:3000']
  })
  const docOptions = new DocumentBuilder()
    .setTitle('API документация')
    .setVersion('1.0')
    .addServer('localhost:3001')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('api', app, document);

  await app.listen(appPort);
}
bootstrap();
