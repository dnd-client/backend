import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!123';
  }


  getTest(name: string): string {
    return "Hello " + name;
  }
}
