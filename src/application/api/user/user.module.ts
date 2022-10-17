import { Module } from '@nestjs/common';

import { UserController } from './controllers/user.controller';
import { ProfileController } from './controllers/profile.controller';

@Module({
  controllers: [UserController, ProfileController],
})
export class UserModule {}
