import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Username is required" })
  username: string;

  @IsEmail({}, { message: "Invalid email" })
  email: string;

  @IsNotEmpty({ message: "Password is required" })
  password: string;
}
