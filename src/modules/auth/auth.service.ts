import { LoginUserInput } from '@/modules/auth/dto/login-user.input';
import { UserService } from '@/modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(id: number): Promise<any> {
    const user = await this.userService.findOne(id);

    return user;
  }

  async signup(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.id);
    if (user) {
      throw new BadRequestException('user already exists');
    }
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.id);
    return {
      access_token: this.jwtService.sign({
        id: user.id,
      }),
      user,
    };
  }
}
