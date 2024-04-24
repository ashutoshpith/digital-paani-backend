import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/utils';

@ObjectType()
@Schema()
export class User extends BaseSchema {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password?: string;

  @Field({ nullable: true })
  @Prop()
  mobile?: string;
}
export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
