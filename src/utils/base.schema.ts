import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export abstract class BaseSchema {
  @Field(() => ID)
  @Prop()
  id: string;

  @Field(() => Date)
  @Prop({ type: Date })
  createdAt: Date;

  @Field(() => Date)
  @Prop({ type: Date })
  updatedAt: Date;

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Field(() => Boolean)
  @Prop({ type: Boolean, default: true })
  isActive: boolean;
}
