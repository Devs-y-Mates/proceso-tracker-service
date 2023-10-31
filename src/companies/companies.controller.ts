import { CompaniesService } from './companies.service';
import { Companies } from './schema/companies.schema';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { AtGuard } from '../common/guards';
import { ValidateMongoId } from '../common/pipe';
import { ErrorCompaniesDto, CompaniesDto, CompaniesResponseDto } from './dto';

@Controller('api/companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @ApiOkResponse({
    description: '200',
    type: CompaniesResponseDto,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorCompaniesDto,
  })
  @UseGuards(AtGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getCompanyById(@Param('id', ValidateMongoId) id: string): Promise<Companies> {
    return this.companiesService.getCompanyById(id);
  }

  @ApiOkResponse({
    description: '200',
    type: [CompaniesResponseDto],
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorCompaniesDto,
  })
  @UseGuards(AtGuard)
  @Get('')
  @HttpCode(HttpStatus.OK)
  getAllCompanies(): Promise<Companies[]> {
    return this.companiesService.getAllCompany();
  }

  @ApiCreatedResponse({
    description: '201 Created',
    type: CompaniesResponseDto,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorCompaniesDto,
  })
  @UseGuards(AtGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() companiesDto: CompaniesDto): Promise<Companies> {
    return this.companiesService.createCompany(companiesDto);
  }

  @ApiOkResponse({
    description: '200 OK',
    type: CompaniesResponseDto,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorCompaniesDto,
  })
  @UseGuards(AtGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ValidateMongoId) id: string,
    @Body() companiesDto: CompaniesDto,
  ): Promise<Companies> {
    return this.companiesService.updateCompany(id, companiesDto);
  }

  @ApiAcceptedResponse({
    description: '200 Accepted',
    type: Number,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorCompaniesDto,
  })
  @UseGuards(AtGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ValidateMongoId) id: string): Promise<number> {
    return this.companiesService.deleteCompany(id);
  }
}
