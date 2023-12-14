import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! nestjs';
  }

  getHell(): string {
    return 'Hello World! nestjs post';
  }
}
