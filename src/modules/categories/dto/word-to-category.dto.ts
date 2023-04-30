import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class WordToCategoryDto {
    @IsString()
    @ApiProperty({ example: 'UUi34jhb', description: 'Word id' })
    wordId: string;
}
