import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class ClassNotFoundException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.ClassNotFound,
                message: 'Class Not Found',
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
