import { Module } from '@nestjs/common';
import { ExampleController } from './controllers/example.controller';

@Module({
  controllers: [ExampleController],
})
export class ExampleModule {}
