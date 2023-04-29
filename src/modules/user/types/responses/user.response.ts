import { TSecuredUser } from '../../../../security/user.security';
import { UserRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UsersResponse implements TSecuredUser {
    @ApiProperty({ example: 'UIs123', description: 'ID' })
    id: string;
    @ApiProperty({ example: 'Danil', description: 'User name' })
    name: string;
    @ApiProperty({ example: '+79137249191', description: 'Phone number' })
    phone: string;
    @ApiProperty({ example: 'Admin Student Teacher', description: 'Role of user' })
    role: UserRole[];
}
