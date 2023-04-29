import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class UserNotFoundException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.UserNotFound,
                message: 'User Not Found',
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
