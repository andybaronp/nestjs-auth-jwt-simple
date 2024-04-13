import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  greet() {
    return 'Hello World!';
  }
}
