import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompaniesDocument = Companies & Document;

@Schema({ timestamps: true })
export class Companies {
  @Prop({
    index: true,
    unique: true,
    required: true,
  })
  name: string;
}

export const CompaniesSchema = SchemaFactory.createForClass(Companies);
