import { ApiProperty } from '@nestjs/swagger';

export class UpdateWordDto {
    @ApiProperty({ example: 'ball', description: 'Keeps the word' })
    readonly value: string;
    @ApiProperty({ example: 'мяч', description: 'Keeps the translation word' })
    readonly translation: string;
}
