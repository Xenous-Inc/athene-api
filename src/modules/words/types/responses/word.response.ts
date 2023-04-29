import { ApiProperty } from '@nestjs/swagger';
import { TSecuredWord } from 'src/security';
export class WordResponse implements TSecuredWord {
    @ApiProperty({ example: 'UIs123', description: 'ID' })
    id: string;
    @ApiProperty({ example: 'ball', description: 'Keeps the word' })
    value: string;
    @ApiProperty({ example: 'мяч', description: 'Keeps the translation word' })
    translation: string;
    @ApiProperty({ default: false })
    isCategorized: boolean;
    @ApiProperty({ description: 'Keeps ID of Language' })
    languageId: string;
    @ApiProperty({ description: 'Keeps ID of Category', required: false })
    categoryId: string;
    @ApiProperty({ description: 'When word create' })
    createdAt: Date;
}
