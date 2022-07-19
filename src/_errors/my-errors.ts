import { BadRequestException, ForbiddenException } from "@nestjs/common";

export class BadRequestError400 extends BadRequestException {}
export class PayloadError400 extends BadRequestException {}

export class ForbidenError403 extends ForbiddenException {}
