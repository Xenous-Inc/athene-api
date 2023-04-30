import { HttpStatus } from '@nestjs/common';
import { AtheneException, AtheneExceptionCode } from '../types';

export class CategoryNotFoundException extends AtheneException {
    constructor() {
        super(
            {
                code: AtheneExceptionCode.CategoryNotFound,
                message: 'Category Not Found',
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
