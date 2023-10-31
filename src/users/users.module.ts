import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TokenModule } from 'src/token/token.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './schema';

@Module({
  imports: [
    TokenModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
