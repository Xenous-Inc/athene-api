import { ApiProperty } from '@nestjs/swagger';
import { TSecuredCategoryToUser } from '../../../../security/category-to-user.security';
export class CategoryToUserResponse implements TSecuredCategoryToUser {
    @ApiProperty({ example: 'Date', description: 'Date' })
    assignedAt: Date;
    @ApiProperty({ example: 'UI3245q', description: 'Category id' })
    categoryId: string;
    @ApiProperty({ example: 'UI3245q', description: 'User id' })
    userId: string;
}
