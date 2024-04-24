import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.schema';
import { Model } from 'mongoose';
import { BookInputDto } from './book.dto';

@Injectable()
export class BookRepo {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(payload: BookInputDto): Promise<Book> {
    return await this.bookModel.create(payload);
  }
}
