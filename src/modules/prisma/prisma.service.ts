import { InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database connected');
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
export default PrismaService;
