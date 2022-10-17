import { Module } from '@nestjs/common';
import { ImageController } from './controllers/image.controller';

@Module({
  controllers: [ImageController]
})
export class FileModule {}
