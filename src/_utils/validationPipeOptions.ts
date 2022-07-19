import { ValidationError, ValidatorOptions } from "class-validator";

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}

export const validationPipeOptions: ValidationPipeOptions = {
  stopAtFirstError: true,
  transform: true,
};
