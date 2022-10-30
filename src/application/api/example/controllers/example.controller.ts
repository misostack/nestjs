import { LoggingInterceptor } from '@application/api/shared/interceptors';
import {
  BadRequestException,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';

@Controller('examples')
export class ExampleController {
  @UseInterceptors(LoggingInterceptor)
  @Get('webhooks')
  webhookExample() {
    console.log('webhook response');
    return [];
  }

  @Get('')
  listExamples() {
    throw new BadRequestException({ errors: [] });
    return [];
  }
}
