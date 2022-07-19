import { Injectable } from "@nestjs/common";
import { genSalt, hash } from "bcryptjs";
import { PrismaService } from "src/prisma.service";
import { PayloadError400 } from "src/_errors/my-errors";
import { CreateUserDto } from "./dto/create-user.dto";
import validateUserDto from "./utils/validateUserDto";
import validateUsername from "./utils/validateUsername";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(payload: CreateUserDto) {
    validateUserDto(payload);

    const emailExists = await this.prisma.user.findFirst({
      where: { email: payload.email },
    });
    if (emailExists) throw new PayloadError400("Email already in use");

    const usernameExists = await this.prisma.user.findFirst({
      where: {
        username: payload.username,
      },
    });
    if (usernameExists) throw new PayloadError400("Username already in use");

    validateUsername(payload.username);

    const salt = await genSalt(10);
    payload.password = await hash(payload.password, salt);

    const savedUser = await this.prisma.user.create({
      data: payload,
    });

    return savedUser;
  }
}
