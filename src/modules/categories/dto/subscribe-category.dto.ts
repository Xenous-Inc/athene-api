import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SubscribeCategoryDto {
    @IsString()
    @ApiProperty({ example: 'UUi23hkj42', description: 'User id' })
    userId: string;
    @IsString()
    @ApiProperty({ example: 'UUi23hkj42', description: 'User id' })
    categoryId: string;
}
