import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserRole } from '@prisma/client';

export class AddRoleDto {
    @IsString()
    @ApiProperty({ example: 'UIs3264', description: 'User id' })
    id: string;
    @IsString()
    @ApiProperty({ example: 'Teacher', description: 'Role for user' })
    role: UserRole;
}
