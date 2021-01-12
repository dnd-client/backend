import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @ApiOperation({ summary: 'Login in app' })
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:name')
  getTest(@Param('name') name: string): string {
    return this.appService.getTest(name);
  }
}
