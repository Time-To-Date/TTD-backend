import { AuthResolver } from '@/modules/auth/auth.resolver';
import { AuthService } from '@/modules/auth/auth.service';
import { JwtStrategy } from '@/modules/auth/strategy/jwt.strategy';
import { LocalStrategy } from '@/modules/auth/strategy/local.strategy';
import { UserModule } from '@/modules/user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: process.env.JWT_EXPIRESIN },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
