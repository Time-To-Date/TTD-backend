import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(User)
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}
  @Query(() => [User], { nullable: true })
  async allUsers() {
    return this.prismaService.user.findMany();
  }
}
