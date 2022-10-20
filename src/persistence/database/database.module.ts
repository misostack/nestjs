import { DataSource } from 'typeorm';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { getTypeORMConfiguration } from '@config/configuration';
import { TYPEORM_EX_CUSTOM_REPOSITORY } from './database.decorator';
import entities from './entities';
import repositories from './repositories';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return getTypeORMConfiguration(entities);
  }
  static forFeature(): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(
        TYPEORM_EX_CUSTOM_REPOSITORY,
        repository,
      );

      if (!entity) {
        continue;
      }
      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource) => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(
            baseRepository.target,
            baseRepository.manager,
            baseRepository.queryRunner,
          );
        },
      });
    }
    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forFeature(entities)],
      providers: providers,
      exports: providers,
    };
  }
}
