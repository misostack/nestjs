import { Module } from '@nestjs/common';

import { ExampleModule } from './example/example.module';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from 'src/persistence/database/database.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './shared/interceptors';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    ExampleModule,
    UserModule,
    FileModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => {
        return new ResponseInterceptor();
      },
    },
  ],
})
export class ApiModule {}
