import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookInputDto, BookQuery, UpdateBookInputDto } from './book.dto';
import { BookService } from './book.service';
import { UserRef } from 'src/auth/user.decorator';
import { UserRefDto } from 'src/user/user.ref';

@Resolver()
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => Book)
  async findOneBook(@Args('_id') _id: string) {
    return this.bookService.getOneBook(_id);
  }

  @Query(() => [Book])
  async findManyBooks(@Args('payload') payload: BookQuery) {
    return this.bookService.filterBooks(payload);
  }

  @Mutation(() => Book)
  async createBook(
    @Args('payload') payload: BookInputDto,
    @UserRef() userDto: UserRefDto,
  ) {
    return this.bookService.createBook(payload, userDto);
  }

  @Mutation(() => Book)
  async updateBook(
    @Args('payload') payload: UpdateBookInputDto,
    @UserRef() userDto: UserRefDto,
  ) {
    return this.bookService.updateBook(payload, userDto);
  }

  @Mutation(() => Boolean)
  async deleteBook(@Args('_id') _id: string) {
    return this.bookService.deleteBook(_id);
  }
}
