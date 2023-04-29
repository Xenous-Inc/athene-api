import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
    @ApiProperty({ example: 'English', description: 'Keeps the name Language' })
    readonly value: string;
}
