import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => Boolean)
  login() {
    return true;
  }

  @Mutation(() => Boolean)
  signUp() {
    return true;
  }
}
