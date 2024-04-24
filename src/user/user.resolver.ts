import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupDto } from './signup.dto';
import { UserService } from './user.service';
import { User } from './user.schema';
import { LoginDto } from './login.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  login(@Args('payload') payload: LoginDto) {
    return this.userService.checkLoginUser(payload);
  }

  @Mutation(() => User)
  signUp(@Args('payload') payload: SignupDto) {
    return this.userService.createUser(payload);
  }
}
