import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as bycryptjs from 'bcryptjs';

import { AuthDto } from './dto';
import { Tokens } from '../token/types';
import { UsersService } from '../users/users.service';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async signupLocal({ email, password }: AuthDto): Promise<Tokens> {
    const newUserDb = await this.userService.createUser(email, password);

    if (!newUserDb) throw new ConflictException('email already exists');

    return {
      access_token: newUserDb.access_token,
      refresh_token: newUserDb.refresh_token,
    };
  }

  async signinLocal({ email, password }: AuthDto): Promise<Tokens> {
    const userDb = await this.userService.getUserByEmail(email);
    if (!userDb) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bycryptjs.compare(password, userDb.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.tokenService.getTokens({
      userId: userDb.user_id,
      email: userDb.email,
    });

    await this.userService.updateRtUser(userDb.user_id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string): Promise<boolean> {
    const user = await this.userService.getUserById(userId);
    if (!user) throw new ForbiddenException('Access Denied');

    await this.userService.updateRtUser(user.user_id);

    return true;
  }

  async verify(user_id: string, confirm_code: string): Promise<boolean> {
    const user = await this.userService.getUserByConfirmCode(
      user_id,
      confirm_code,
    );

    if (!user) throw new BadRequestException('Invalid link');

    await this.userService.activeUser(user.user_id);

    return true;
  }

  async refreshTokens(userId: string, rt: string): Promise<Tokens> {
    const userDb = await this.userService.getUserById(userId);

    if (!userDb || !userDb.refresh_token)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bycryptjs.compare(rt, userDb.refresh_token);

    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await await this.tokenService.getTokens({
      userId: userDb.user_id,
      email: userDb.email,
    });

    await this.userService.updateRtUser(userDb.user_id, tokens.refresh_token);

    return tokens;
  }
}
