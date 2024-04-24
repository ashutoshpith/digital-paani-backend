import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupDto } from './signup.dto';
import { UserService } from './user.service';
import { User } from './user.schema';
import { LoginDto } from './login.dto';
import { PublicGuard } from 'src/auth/public.guard';
import { UserRef } from 'src/auth/user.decorator';
import { UserRefDto } from './user.ref';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @PublicGuard()
  @Query(() => String, {
    description: 'Use to Get Token After providing correct credentials',
  })
  login(@Args('payload') payload: LoginDto) {
    return this.userService.checkLoginUser(payload);
  }

  @PublicGuard()
  @Mutation(() => User, {
    description: 'Use To Create Account In The System',
  })
  signUp(@Args('payload') payload: SignupDto) {
    return this.userService.createUser(payload);
  }

  @Query(() => String, {
    description: 'Use To Validate Eithere User And Token Working Fine Or Not',
  })
  checkUser(@UserRef() userDto: UserRefDto) {
    console.log('userDto ', userDto.email, userDto.name);
    return 'hello';
  }
}
