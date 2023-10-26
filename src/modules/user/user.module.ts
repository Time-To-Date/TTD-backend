import { PrismaModule } from '@/modules/prisma/prisma.module';
import { UserService } from '@/modules/user/user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
