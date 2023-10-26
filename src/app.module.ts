import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from '@/modules/user/user.module';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { LoggerMiddleware } from '@/common/middleware/logger.middleware';

@Module({
  imports: [UserModule, PrismaModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
