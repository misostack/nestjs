import { ExampleRepository } from '@persistence/database/repositories/example-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';
import { getTypeORMConfiguration } from '@config/configuration';
import entities from './entities';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return getTypeORMConfiguration(entities);
  }
  static forFeature(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forFeature(entities)],
      providers: [ExampleRepository],
      exports: [ExampleRepository],
    };
  }
}
