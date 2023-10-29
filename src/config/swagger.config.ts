import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tracker App - API Documentation')
  .setDescription('Tracker - Tracker App - API Solution.')
  .setVersion('1.0')
  .addTag('API Endpoints')
  .build();
