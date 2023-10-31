import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CompaniesDto } from './dto';
import { Companies, CompaniesDocument } from './schema';

type CompaniesCreateResponse = Companies;

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Companies.name)
    private readonly companiesModel: Model<CompaniesDocument>,
  ) {}

  async createCompany(
    companiesDto: CompaniesDto,
  ): Promise<CompaniesCreateResponse | null> {
    try {
      const newCompany = await this.companiesModel.create({
        ...companiesDto,
      });

      return newCompany;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateCompany(
    _id: string,
    companiesDto: CompaniesDto,
  ): Promise<CompaniesCreateResponse | null> {
    try {
      await this.companiesModel.findByIdAndUpdate(_id, companiesDto).exec();

      const company = await this.companiesModel.findById(_id).exec();

      return company;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteCompany(id: string): Promise<number> {
    try {
      const company = await this.companiesModel.deleteOne({ _id: id }).exec();

      return company.deletedCount;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getCompanyById(_id: string): Promise<Companies> {
    try {
      return await this.companiesModel.findById({ _id }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAllCompany(): Promise<Companies[]> {
    try {
      return await this.companiesModel.find({}).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
