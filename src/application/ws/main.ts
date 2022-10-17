import { NestFactory } from '@nestjs/core';
import { WsAppModule } from './ws.module';

async function bootstrap() {
  const app = await NestFactory.create(WsAppModule);
  await app.listen(3001);
}
bootstrap();
