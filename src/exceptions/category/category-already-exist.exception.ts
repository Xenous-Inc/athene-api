import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class CategoryAlreadyExistException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.CategoryAlreadyExist,
                message: 'Category already exist',
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
