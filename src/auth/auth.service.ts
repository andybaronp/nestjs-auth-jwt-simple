import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser = [
  { id: 1, username: 'test', password: 'test' },
  { id: 2, username: 'test2', password: 'test2' },
  { id: 3, username: 'test3', password: 'test3' },
];

@Injectable()
export class AuthService {
  constructor(private jwtServise: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const finUser = fakeUser.find((user) => user.username === username);

    if (!finUser) return null;
    if (finUser.password === password) {
      const { password, ...rest } = finUser;
      return this.jwtServise.sign(rest);
    }
  }
}
