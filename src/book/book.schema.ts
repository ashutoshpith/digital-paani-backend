import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/utils';
import { Author, AuthorSchema } from './author.schema';

@ObjectType()
@Schema()
export class Book extends BaseSchema {
  @Field()
  @Prop()
  title: string;

  @Field(() => Author)
  @Prop({ type: AuthorSchema })
  author: Author;

  @Field()
  @Prop()
  publicationYear: string;
}

export type BookDocument = HydratedDocument<Book>;

export const BookSchema = SchemaFactory.createForClass(Book);
