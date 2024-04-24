import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { SignupDto } from './signup.dto';

@Injectable()
export class UserRepo {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(payload: SignupDto): Promise<User> {
    return await this.userModel.create(payload);
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      email,
    });
  }
}
