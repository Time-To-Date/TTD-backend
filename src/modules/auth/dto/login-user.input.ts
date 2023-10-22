import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => Int)
  id: number;
}
