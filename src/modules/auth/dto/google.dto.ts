import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GoogleUser {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class GoogleUserRequest {
  user: GoogleUser;
}
