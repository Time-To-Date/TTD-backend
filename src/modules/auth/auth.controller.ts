import { GoogleAuthGuard } from '@/common/guard/google.guard';
import { RtGuard } from '@/common/guard/rt.guard';
import { AuthService } from '@/modules/auth/auth.service';
import { GoogleUserRequest } from '@/modules/auth/dto/google.dto';
import { ITokens } from '@/modules/auth/interface/auth.interface';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { UserService } from '@/modules/user/user.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('')
  @UseGuards(GoogleAuthGuard)
  google() {}

  @Get('/google/login')
  @UseGuards(GoogleAuthGuard)
  async loginGoogle(@Req() req: Request & GoogleUserRequest): Promise<ITokens> {
    const newUser: UserRequiredProperties = {
      email: req.user.email,
      name: req.user.name,
    };
    const { accessToken, refreshToken } =
      await this.authService.googleLogin(newUser);

    return { accessToken, refreshToken };
  }

  @Post('refresh')
  @UseGuards(RtGuard)
  refreshToken() {}
}
