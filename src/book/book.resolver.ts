import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookInputDto } from './book.dto';
import { BookService } from './book.service';
import { UserRef } from 'src/auth/user.decorator';
import { UserRefDto } from 'src/user/user.ref';

@Resolver()
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(
    @Args('payload') payload: BookInputDto,
    @UserRef() userDto: UserRefDto,
  ) {
    return this.bookService.createBook(payload, userDto);
  }
}
