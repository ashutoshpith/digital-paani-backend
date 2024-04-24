import { Field, InputType } from '@nestjs/graphql';

@InputType('LoginInputDto')
export class LoginDto {
  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;
}
