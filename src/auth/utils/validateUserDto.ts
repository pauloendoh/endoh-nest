import { PayloadError400 } from "src/_errors/my-errors";
import { CreateUserDto } from "../dto/create-user.dto";

const validateUserDto = (user: CreateUserDto) => {
  if (!user.email.length) throw new PayloadError400("Email is required");
  if (!user.username.length) throw new PayloadError400("Username is required");
  if (!user.password.length) throw new PayloadError400("Password is required");
  else if (user.password.length < 6)
    throw new PayloadError400("Password must have at least 6 characters");
  return true;
};

export default validateUserDto;
