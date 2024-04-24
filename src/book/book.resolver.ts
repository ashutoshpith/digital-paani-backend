import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookInputDto, BookQuery, UpdateBookInputDto } from './book.dto';
import { BookService } from './book.service';
import { UserRef } from 'src/auth/user.decorator';
import { UserRefDto } from 'src/user/user.ref';

@Resolver()
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => Book, {
    description: 'Get One Book With Valid Id ',
  })
  async findOneBook(@Args('_id') _id: string) {
    return this.bookService.getOneBook(_id);
  }

  @Query(() => [Book], {
    description:
      'Filters Books By Providing Publishing Year or Author Name or Author Email',
  })
  async findManyBooks(@Args('payload') payload: BookQuery) {
    return this.bookService.filterBooks(payload);
  }

  @Mutation(() => Book, {
    description: 'Create A Book with Author Data',
  })
  async createBook(
    @Args('payload') payload: BookInputDto,
    @UserRef() userDto: UserRefDto,
  ) {
    return this.bookService.createBook(payload, userDto);
  }

  @Mutation(() => Book, {
    description: 'Update Book With Valid Token',
  })
  async updateBook(
    @Args('payload') payload: UpdateBookInputDto,
    @UserRef() userDto: UserRefDto,
  ) {
    return this.bookService.updateBook(payload, userDto);
  }

  @Mutation(() => Boolean, {
    description: 'Delete The Book if in case not Needed',
  })
  async deleteBook(@Args('_id') _id: string) {
    return this.bookService.deleteBook(_id);
  }
}
