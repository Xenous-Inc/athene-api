import { ApiProperty } from '@nestjs/swagger';

export class CreateWordDto {
    @ApiProperty({ example: 'ball', description: 'Keeps the word' })
    readonly value: string;
    @ApiProperty({ example: 'мяч', description: 'Keeps the translation word' })
    readonly translation: string;
    @ApiProperty({ description: 'Keeps the ID of Language' })
    readonly languageId: string;
    @ApiProperty({ description: 'Keeps the ID of Category', required: false })
    readonly categoryId?: string;
}
