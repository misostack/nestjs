import { Module } from '@nestjs/common';

import { ExampleModule } from './example/example.module';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from 'src/persistence/database/database.module';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    ExampleModule,
    UserModule,
    FileModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
