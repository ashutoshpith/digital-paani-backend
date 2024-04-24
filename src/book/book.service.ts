import { Injectable } from '@nestjs/common';
import { BookRepo } from './book.repo';
import { BookInputDto, UpdateBookInputDto } from './book.dto';
import { Book } from './book.schema';
import { UserRefDto } from 'src/user/user.ref';
import { ObjectId } from 'mongodb';

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

  async updateBook(
    payload: UpdateBookInputDto,
    userRef: UserRefDto,
  ): Promise<Book> {
    payload.author = {
      email: userRef.email,
      name: userRef.name,
    };
    return this.bookRepo.update(
      {
        _id: payload._id,
      },
      payload,
    );
  }

  async getOneBook(_id: string): Promise<Book> {
    const data = await this.bookRepo.findOne({ _id: new ObjectId(_id) });
    return data;
  }

  async deleteBook(_id: string): Promise<boolean> {
    return this.bookRepo.delete({
      _id,
    });
  }
}
