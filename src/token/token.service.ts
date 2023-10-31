import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Tokens, JwtPayload } from './types';

@Injectable()
export class TokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async getTokens({ userId, email }: JwtPayload): Promise<Tokens> {
    const jwtPayload = {
      sub: userId,
      email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET') || '1234',
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET') || '1234',
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  getRandomCode = (): string =>
    Math.floor(1000 + Math.random() * 9000).toString();
}
