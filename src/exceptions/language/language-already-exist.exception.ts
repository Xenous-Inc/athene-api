import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class LanguageAlreadyExistException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.LanguageAlreadyExist,
                message: 'Language Already Exist',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
