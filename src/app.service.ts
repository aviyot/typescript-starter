import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {fristname:"avi",lastname:"get"};
  }
}
