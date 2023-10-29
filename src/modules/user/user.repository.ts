import { PrismaService } from '@/modules/prisma/prisma.service';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}
  async create(newUser: UserRequiredProperties) {
    try {
      await this.prismaService.user.create({ data: newUser });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  async findAll() {
    try {
      return await this.prismaService.user.findMany();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findById(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
}
