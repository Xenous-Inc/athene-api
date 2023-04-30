import { ApiProperty } from '@nestjs/swagger';
import { TSecuredCategory } from 'src/security';
export class CategoryResponse implements TSecuredCategory {
    @ApiProperty({ example: 'UIs123', description: 'ID' })
    id: string;
    @ApiProperty({ example: 'sport', description: 'Keeps the category' })
    value: string;
    @ApiProperty({ example: 'UIs123', description: 'Keeps author ID' })
    authorId: string;
}
