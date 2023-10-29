import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GoogleUser {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class GoogleUserRequest {
  readonly user: GoogleUser;
}
