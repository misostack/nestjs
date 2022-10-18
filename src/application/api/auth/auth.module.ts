import { Module } from '@nestjs/common';
import { DatabaseModule } from '@persistence/database/database.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [DatabaseModule.forFeature()],
  controllers: [AuthController],
})
export class AuthModule {}
