import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Author } from './author.schema';

@InputType('BookInputDto')
export class BookInputDto {
  @Field()
  title: string;

  author: Author;

  @Field()
  publicationYear: string;
}

@InputType('UpdateBookInputDto')
export class UpdateBookInputDto extends PartialType(BookInputDto) {
  @Field()
  _id: string;
}

@InputType('BookQueryInputDto')
export class BookQuery {
  @Field({ nullable: true })
  publicationYear: string;

  @Field(() => String, { nullable: true })
  authorEmail: string;

  @Field(() => String, { nullable: true })
  authorName: string;
}
