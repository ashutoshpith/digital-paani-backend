import { Field, InputType } from '@nestjs/graphql';

@InputType('SignupInputDto')
export class SignupDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  mobile?: string;
}
