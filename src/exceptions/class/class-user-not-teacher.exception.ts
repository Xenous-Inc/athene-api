import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class ClassUserNotTeacher extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.ClassUserNotTeacher,
                message: 'Only Teacher Can Create Class',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
