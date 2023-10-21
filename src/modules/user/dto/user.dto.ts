import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

@InputType()
export class UserInput {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  profile_message: string;

  @Field(() => Date)
  @IsDate()
  createdAt: Date;

  @Field(() => Date)
  @IsDate()
  updatedAt: Date;

  @Field(() => Date)
  @IsDate()
  deletedAt: Date;
}
