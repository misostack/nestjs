import { Logger } from '@config/log';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule, {
    logger: new Logger(),
  });

  await app.listen(3000);
}
bootstrap();
