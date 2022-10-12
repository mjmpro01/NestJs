import { NestFactory } from '@nestjs/core';
import { applyIsOptionalDecorator } from '@nestjs/mapped-types';
import { AppModule } from './app.module';
import { HttpException } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
