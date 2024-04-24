import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  const logger = new Logger('Bootstrap');
  logger.log(`Server Running on port ${3000}`);
}
bootstrap();
