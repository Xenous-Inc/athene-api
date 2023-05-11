import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @ApiProperty({ example: 'sport', description: 'Category name' })
    value: string;
    @IsString()
    @ApiProperty({ example: 'Uifsd', description: 'User id' })
    authorId: string;
}
