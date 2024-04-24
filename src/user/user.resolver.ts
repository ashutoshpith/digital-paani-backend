import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupDto } from './signup.dto';
import { UserService } from './user.service';
import { User } from './user.schema';
import { LoginDto } from './login.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/auth/public.guard';
import { UserRef } from 'src/auth/user.decorator';
import { UserRefDto } from './user.ref';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @PublicGuard()
  @Query(() => String)
  login(@Args('payload') payload: LoginDto) {
    return this.userService.checkLoginUser(payload);
  }

  @PublicGuard()
  @Mutation(() => User)
  signUp(@Args('payload') payload: SignupDto) {
    return this.userService.createUser(payload);
  }

  @UseGuards(AuthGuard)
  @Query(() => String)
  checkUser(@UserRef() userDto: UserRefDto) {
    console.log('userDto ', userDto.email, userDto.name);
    return 'hello';
  }
}
