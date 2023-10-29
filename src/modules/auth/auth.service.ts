import { IJwtPayload, ITokens } from '@/modules/auth/interface/auth.interface';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { UserRepository } from '@/modules/user/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async googleLogin(newUser: UserRequiredProperties): Promise<ITokens> {
    const findUser = await this.userRepository.findByEmail(newUser.email);
    if (!findUser) {
      await this.userRepository.create(newUser);
    }
    const user = await this.userRepository.findByEmail(newUser.email);

    const tokens = await this.getTokens(user.id);
    return tokens;
  }

  async getAccessToken(id: number) {
    const jwtPayload = {
      id,
    };
    const accessToken = await this.jwtService.signAsync(jwtPayload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
    });
    return { accessToken };
  }

  async getRefreshToken(id: number) {
    const jwtPayload: IJwtPayload = {
      id,
    };
    const refreshToken = await this.jwtService.signAsync(jwtPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRESIN,
    });
    return { refreshToken };
  }

  async getTokens(id: number): Promise<ITokens> {
    const [{ accessToken }, { refreshToken }] = await Promise.all([
      this.getAccessToken(id),
      this.getRefreshToken(id),
    ]);
    return { accessToken, refreshToken };
  }

  // async restoreRefreshToken(refreshToken: string): Promise<ITokens> {
  //   const user = await this.userService.findById(id);

  //   const accessToken = await this.get;

  //   const tokens = await this.getTokens(user.id);

  //   return tokens;
  // }
}
