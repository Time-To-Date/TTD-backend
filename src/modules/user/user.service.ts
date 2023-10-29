import { PrismaService } from '@/modules/prisma/prisma.service';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(newUser: UserRequiredProperties): Promise<void> {
    try {
      await this.prismaService.user.create({ data: newUser });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findById(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
}
