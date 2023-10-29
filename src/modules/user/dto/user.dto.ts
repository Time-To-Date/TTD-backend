import { PickType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class User {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  profile_message?: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  @IsOptional()
  deletedAt?: Date;
}

export class UserRequiredProperties extends PickType(User, ['email', 'name']) {}
export class UserOptinalProperties extends PickType(User, [
  'profile_message',
]) {}
