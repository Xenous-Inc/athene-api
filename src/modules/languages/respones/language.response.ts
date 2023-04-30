import { UserRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TSecuredLanguage } from 'src/security';

export class LanguageResponse implements TSecuredLanguage {
    @ApiProperty({ example: 'UIs123', description: 'ID' })
    id: string;
    @ApiProperty({ example: 'English', description: 'Keeps the name Language' })
    value: string;
}
