import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';
import { UsersModule } from '../users/users.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [JwtModule.register({}), UsersModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
