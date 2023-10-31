import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping.controller';
import { UsersModule } from './users/users.module';
import { TokenModule } from './token/token.module';

const configService = new ConfigService();
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      configService.get('MONGODB_URI') || `mongodb://localhost:27017/tracker`,
      {
        autoIndex: true,
      },
    ),
    UsersModule,
    TokenModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT') || 3000;
  }
}
