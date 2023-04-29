import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class LanguageNotFoundException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.LanguageNotFound,
                message: 'Language Not Found',
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
