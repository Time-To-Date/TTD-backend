import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app.module';
import { winstonLogger } from '@/common/log/winston.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: winstonLogger,
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
