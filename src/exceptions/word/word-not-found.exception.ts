import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class WordNotFoundException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.WordNotFound,
                message: 'Word Not Found',
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
