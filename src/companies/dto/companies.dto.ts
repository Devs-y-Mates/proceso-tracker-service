import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsMongoId,
  IsDate,
} from 'class-validator';

export class CompaniesDto {
  @ApiProperty({
    type: String,
    description: 'Name of the company',
    default: 'Fake factory',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CompaniesResponseDto extends CompaniesDto {
  @ApiProperty({
    type: String,
    description: 'Id of the match',
    default: '630aeeb06997b40d6907c6c0',
  })
  @IsNotEmpty()
  @IsMongoId()
  _id: string;

  @ApiProperty({
    type: String,
    description: 'Company name',
    default: 'Fake company',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: Date,
    description: 'Created at',
    default: '1661661670915',
  })
  @IsOptional()
  @IsDate()
  created_at: Date;
}

export class ErrorCompaniesDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'statusCode', default: 403 })
  readonly statusCode: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'message',
    default: 'Access Denied',
  })
  readonly message: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'error',
    default: 'Forbidden',
  })
  readonly error: string;
}
