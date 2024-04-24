import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepo } from './user.repo';
import { SignupDto } from './signup.dto';
import { HashService } from 'src/utils/hash.service';
import { User } from './user.schema';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepo,
    private jwtService: JwtService,
  ) {}

  async createUser(signupDto: SignupDto): Promise<User> {
    signupDto.password = await HashService.hashValue(signupDto.password);
    return this.userRepo.create(signupDto);
  }

  async checkLoginUser(payload: LoginDto): Promise<string> {
    const hasUser = await this.userRepo.findUserByEmail(payload.email);
    if (!hasUser) {
      throw new NotFoundException('User Email Not Found');
    }

    const hasPassword = await HashService.hasValidHash(
      payload.password,
      hasUser.password,
    );
    if (!hasPassword) {
      throw new BadRequestException('Password Not Match');
    }
    const digestData = {
      sub: hasUser.id,
      email: hasUser.email,
      name: hasUser.name,
    };
    const token = await this.jwtService.signAsync(digestData);
    return token;
  }
}
