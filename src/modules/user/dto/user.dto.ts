import { PickType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class User {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly profile_message?: string;

  @IsDate()
  @IsNotEmpty()
  readonly createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  readonly updatedAt: Date;

  @IsDate()
  @IsOptional()
  readonly deletedAt?: Date;
}

export class UserRequiredProperties extends PickType(User, ['email', 'name']) {}
export class UserOptinalProperties extends PickType(User, [
  'profile_message',
]) {}
