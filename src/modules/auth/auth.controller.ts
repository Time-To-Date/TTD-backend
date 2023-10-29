import { GoogleAuthGuard } from '@/common/guard/google.guard';
import { RtGuard } from '@/common/guard/rt.guard';
import { AuthService } from '@/modules/auth/auth.service';
import { GoogleUserRequest } from '@/modules/auth/dto/google.dto';
import { ITokens } from '@/modules/auth/interface/auth.interface';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { UserService } from '@/modules/user/user.service';
import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';

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
  async loginGoogle(
    @Req() req: Request & GoogleUserRequest,
    @Res() res: Response,
  ): Promise<ITokens> {
    const newUser: UserRequiredProperties = {
      email: req.user.email,
      name: req.user.name,
    };
    const { accessToken, refreshToken } =
      await this.authService.googleLogin(newUser);

    res.setHeader('Authorization', 'Bearer ' + [accessToken, refreshToken]);
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    return { accessToken, refreshToken };
  }

  @Post('refresh')
  @UseGuards(RtGuard)
  refreshToken() {}
}
