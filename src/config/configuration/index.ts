import { MYSQL_DB_URI } from '@config/environment';
import { TypeOrmModule } from '@nestjs/typeorm';

export const getTypeORMConfiguration = (entities) => {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    url: MYSQL_DB_URI,
    entities,
    synchronize: false,
  });
};
