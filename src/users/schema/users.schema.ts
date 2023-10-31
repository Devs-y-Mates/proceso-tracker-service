import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true })
export class Users {
  @Prop({
    required: true,
    index: true,
    unique: true,
  })
  user_id: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  refresh_token: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop()
  confirm_code: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
