import { HttpException, HttpStatus } from '@nestjs/common';

export enum AtheneExceptionCode {
    UserAlreadyExist = 601,
    UserNotFound = 602,
    WordAlreadyExist = 603,
    WordNotFound = 604,
    LanguageNotFound = 605,
    LanguageAlreadyExist = 606,

    ClassAlreadyExist = 609,
    ClassNotFound = 610,
    ClassUserNotTeacher = 611,
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
