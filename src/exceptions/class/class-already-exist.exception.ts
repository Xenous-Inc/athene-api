import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class ClassAlreayExistException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.ClassAlreadyExist,
                message: 'Class already exist',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
