import { Test, TestingModule } from '@nestjs/testing';
import { ClothingsController } from './clothings.controller';
import { ClothingsService } from './clothings.service';

describe('ClothingsController', () => {
  let controller: ClothingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothingsController],
      providers: [ClothingsService],
    }).compile();

    controller = module.get<ClothingsController>(ClothingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
