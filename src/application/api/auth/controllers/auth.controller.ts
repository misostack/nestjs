import { Controller, Get, Logger } from '@nestjs/common';
import { ExampleRepository } from '@persistence/database/repositories/example-repository';

@Controller('auth')
export class AuthController {
  constructor(private readonly exampleRepository: ExampleRepository) {}
  @Get('')
  async index() {
    const example = await this.exampleRepository.findOne({
      where: {
        id: 1,
      },
    });
    Logger.error('test auth log', example);
    return { example };
  }
}
