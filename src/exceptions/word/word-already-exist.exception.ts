import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class WordAlreadyExistException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.WordAlreadyExist,
                message: 'Word Already Exist',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
