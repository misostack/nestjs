import { DynamicModule, Module } from '@nestjs/common';
import { getTypeORMConfiguration } from '@config/configuration';
import entities from './entities';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return getTypeORMConfiguration([entities]);
  }
}
