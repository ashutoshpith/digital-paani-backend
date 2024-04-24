import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { BaseRepo } from 'src/utils/base.repo';

@Injectable()
export class BookRepo extends BaseRepo<BookDocument, Book> {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    super(bookModel);
  }
}
