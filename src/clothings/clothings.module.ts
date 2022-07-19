import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TestService } from 'src/test/test.service';
import { ClothingsController } from './clothings.controller';
import { ClothingsService } from './clothings.service';

@Module({
  controllers: [ClothingsController],
  providers: [ClothingsService, TestService, PrismaService],
})
export class ClothingsModule {}
