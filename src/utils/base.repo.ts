import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { BaseState } from './base-state.interface';
import { ObjectId } from 'mongodb';
export interface IBaseRepo {
  create(payload: BaseState): Promise<Document>;
  findOne(filter: FilterQuery<Document>): Promise<Document>;
  findMany(filter: FilterQuery<Document>): Promise<Document[]>;
  update(
    filter: FilterQuery<Document>,
    update: UpdateQuery<Document>,
  ): Promise<Document>;

  delete(filter: FilterQuery<Document>): Promise<boolean>;
}

export abstract class BaseRepo<
  TDocument extends Document<any>,
  TPayload extends BaseState,
> implements IBaseRepo
{
  constructor(protected model: Model<TDocument>) {}

  async create(payload: TPayload): Promise<TDocument> {
    payload._id = new ObjectId();
    payload.createdAt = new Date();
    return this.model.create(payload);
  }

  async findOne(filter: FilterQuery<TPayload>): Promise<TDocument> {
    return this.model.findOne(filter);
  }

  async findMany(filter: FilterQuery<TDocument>) {
    return this.model.find(filter);
  }

  async update(
    filter: FilterQuery<TPayload>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    await this.model.updateOne(filter, update);
    return this.findOne(filter);
  }

  async delete(filter: FilterQuery<TPayload>): Promise<boolean> {
    await this.model.deleteOne(filter);
    return true;
  }
}
