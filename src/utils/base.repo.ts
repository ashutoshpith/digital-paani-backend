import { Document, FilterQuery, Model } from 'mongoose';
import { BaseState } from './base-state.interface';

export interface IBaseRepo {
  create(payload: BaseState): Promise<Document>;
  findOne(filter: FilterQuery<Document>): Promise<Document>;
  findMany();
}

export abstract class BaseRepo<
  TDocument extends Document<any>,
  TPayload extends BaseState,
> implements IBaseRepo
{
  constructor(protected model: Model<TDocument>) {}

  async create(payload: TPayload): Promise<TDocument> {
    return this.model.create(payload);
  }

  findOne(filter: FilterQuery<TPayload>): Promise<TDocument> {
    return this.model.findOne(filter);
  }

  findMany() {}
}
