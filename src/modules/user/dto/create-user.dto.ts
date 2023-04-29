import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @ApiProperty({ example: 'Danil', description: 'User name' })
    name: string;
    @IsString()
    @IsPhoneNumber()
    @ApiProperty({ example: '+79620440994', description: 'Phone user' })
    phone: string;
}
