import { Field, InputType } from '@nestjs/graphql';
import { Author } from './author.schema';

@InputType('BookInputDto')
export class BookInputDto {
  @Field()
  title: string;

  author: Author;

  @Field()
  publicationYear: string;
}
