import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType('AuthorDto')
@InputType('AuthorInputDto')
@Schema()
export class Author {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  email: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
