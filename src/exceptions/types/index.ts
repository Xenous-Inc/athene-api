import { HttpException, HttpStatus } from '@nestjs/common';

export enum AtheneExceptionCode {
    UserAlreadyExist = 601,
    UserNotFound = 602,
}
export interface IAtheneExceptionResponse {
    code: AtheneExceptionCode;
    message?: string | string[];
    error?: string;
}
export abstract class AtheneException extends HttpException {
    constructor(res: IAtheneExceptionResponse, status: HttpStatus) {
        super(res, status);
    }
}
