import { DynamicModule, Module } from '@nestjs/common';
import { getTypeORMConfiguration } from '@config/configuration';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return getTypeORMConfiguration([]);
  }
}
