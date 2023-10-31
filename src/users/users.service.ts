import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bycryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './schema';
import { TokenService } from '../token/token.service';
import { EmailService } from '../email/email.service';

type UserCreateResponse = Users;

@Injectable()
export class UsersService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly emailService: EmailService,
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
  ) {}

  async createUser(
    email: string,
    password: string,
  ): Promise<UserCreateResponse | null> {
    try {
      const user = await this.getUserByEmail(email);

      if (user) return null;

      const userId = uuid();
      const newPassword = await bycryptjs.hash(password, 10);
      const tokens = await this.tokenService.getTokens({ userId, email });
      const refresh_token = await bycryptjs.hash(tokens.refresh_token, 10);
      const confirm_code = this.tokenService.getRandomCode();

      const newUser = await this.usersModel.create({
        user_id: userId,
        email,
        password: newPassword,
        refresh_token,
        confirm_code,
        created_at: new Date().toISOString(),
      });

      // TODO: revisar el envio de email
      await this.emailService.sendUserConfirmation(confirm_code, email, '2345');

      return {
        ...tokens,
        ...newUser,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateRtUser(userId: string, refresh_token?: string): Promise<void> {
    try {
      const hashrt = refresh_token
        ? await bycryptjs.hash(refresh_token, 10)
        : null;

      await this.usersModel
        .findOneAndUpdate({ user_id: userId }, { hashrt })
        .exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async activeUser(userId: string): Promise<void> {
    try {
      await this.usersModel
        .findOneAndUpdate({ user_id: userId }, { isActive: true })
        .exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getUserByEmail(email: string): Promise<Users | undefined> {
    return this.usersModel.findOne<Users>({ email }).exec();
  }

  async getUserById(userId: string): Promise<Users | undefined> {
    return this.usersModel.findOne<Users>({ user_id: userId }).exec();
  }

  async getUserByConfirmCode(
    user_id: string,
    confirm_code: string,
  ): Promise<Users | undefined> {
    return this.usersModel.findOne<Users>({ user_id, confirm_code }).exec();
  }
}
