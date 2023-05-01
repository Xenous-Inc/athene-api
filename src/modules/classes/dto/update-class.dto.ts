import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassDto {
    @ApiProperty({ example: 'Rap', description: 'Class name' })
    readonly title: string;
    @ApiProperty({ example: 'Here u will learn about rap ' })
    readonly description: string;
}
