import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ClothingsModule } from "./clothings/clothings.module";
import { HttpExceptionFilter } from "./http-exception.filter";
import { PrismaService } from "./prisma.service";
import { TestService } from "./test/test.service";

@Module({
  imports: [ClothingsModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TestService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
