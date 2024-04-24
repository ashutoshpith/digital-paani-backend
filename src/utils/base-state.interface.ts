import { ObjectId } from 'mongodb';
export interface BaseState {
  _id?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
  isActive?: boolean;
}
