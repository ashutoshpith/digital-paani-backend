import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { BaseState } from './base-state.interface';
import { ObjectId } from 'mongodb';

@ObjectType()
export abstract class BaseSchema implements BaseState {
  @Field(() => ID)
  @Prop()
  _id?: ObjectId;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date })
  updatedAt?: Date;

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: false })
  isDeleted?: boolean;

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: true })
  isActive?: boolean;
}
