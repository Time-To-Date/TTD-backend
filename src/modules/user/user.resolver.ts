import { User } from '@/modules/user/dto/user-response';
import { UserService } from '@/modules/user/user.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User], { name: 'users' })
  async allUsers() {
    return this.userService.findAll();
  }

  @Query(() => [User], { name: 'user' })
  async findUser(id: number) {
    return this.userService.findOne(id);
  }
}
