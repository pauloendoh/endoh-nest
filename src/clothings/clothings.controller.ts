import { Body, Controller, Get, Post } from "@nestjs/common";
import { TestService } from "src/test/test.service";
import { BadRequestError400 } from "src/_errors/my-errors";
import { ClothingsService } from "./clothings.service";
import { CreateClothingDto } from "./dto/create-clothing.dto";

@Controller("clothings")
export class ClothingsController {
  constructor(
    private readonly clothingsService: ClothingsService,
    private readonly testService: TestService
  ) {}

  @Post()
  async create(@Body() dto: CreateClothingDto) {
    const created = await this.testService.createTest(dto.name);
    return created;
  }

  @Get()
  async findAll() {
    throw new BadRequestError400("brilha mt");

    // const tests = await this.testService.findAllTests();
    // return tests;
  }
}
