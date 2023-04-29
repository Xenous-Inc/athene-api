import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class UserAlreadyExistException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.UserAlreadyExist,
                message: 'User already exist',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
