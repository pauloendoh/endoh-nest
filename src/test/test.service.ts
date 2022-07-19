import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {}

  createTest = async (testName: string) => {
    return this.prisma.test.create({ data: { name: testName } });
  };

  findAllTests = async () => {
    return this.prisma.test.findMany();
  };
}
