import { Controller, Get, Logger } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('')
  index() {
    Logger.error('test auth log');
  }
}
