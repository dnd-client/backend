import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });
  const docOptions = new DocumentBuilder()
    .setTitle('API документация')
    .setVersion('1.0')
    .addServer('localhost:3001')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
