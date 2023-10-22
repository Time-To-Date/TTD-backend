import { PrismaModule } from '@/modules/prisma/prisma.module';
import { UserResolver } from '@/modules/user/user.resolver';
import { UserService } from '@/modules/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
