import { Injectable } from '@nestjs/common';
import { BookRepo } from './book.repo';
import { BookInputDto } from './book.dto';
import { Book } from './book.schema';
import { UserRefDto } from 'src/user/user.ref';

@Injectable()
export class BookService {
  constructor(private readonly bookRepo: BookRepo) {}

  async createBook(payload: BookInputDto, userRef: UserRefDto): Promise<Book> {
    payload.author = {
      email: userRef.email,
      name: userRef.name,
    };

    return this.bookRepo.create(payload);
  }
}
