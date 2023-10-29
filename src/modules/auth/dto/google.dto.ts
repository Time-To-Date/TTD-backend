import { IsEmail, IsString } from 'class-validator';

export class GoogleUser {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
}

export class GoogleUserRequest {
  user: GoogleUser;
}
