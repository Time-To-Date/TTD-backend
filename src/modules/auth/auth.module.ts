import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import { AtStrategy } from '@/modules/auth/strategy/at.strategy';
import { GoogleStrategy } from '@/modules/auth/strategy/google.strategy';
import { RtStrategy } from '@/modules/auth/strategy/rt.strategy';
import { UserModule } from '@/modules/user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, UserModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, AtStrategy, RtStrategy],
  exports: [AuthService, GoogleStrategy],
})
export class AuthModule {}
