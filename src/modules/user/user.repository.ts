import { PrismaService } from '@/modules/prisma/prisma.service';
import { UserRequiredProperties } from '@/modules/user/dto/user.dto';
import { IUser } from '@/modules/user/interface/user.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}
  async create(newUser: UserRequiredProperties): Promise<void> {
    try {
      await this.prismaService.user.create({ data: newUser });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  async findAll(): Promise<IUser[]> {
    try {
      return await this.prismaService.user.findMany();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findById(id: number): Promise<IUser> {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<IUser> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
}
