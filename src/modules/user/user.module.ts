import { PrismaModule } from '@/modules/prisma/prisma.module';
import { UserService } from '@/modules/user/user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from '@/modules/user/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
