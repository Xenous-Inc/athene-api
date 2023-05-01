import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
    @ApiProperty({ example: 'Rap', description: 'Class name' })
    readonly title: string;
    @ApiProperty({ example: 'Here u will learn about rap ' })
    readonly description: string;
    @ApiProperty({ description: 'Here ID of teacher' })
    readonly teacherId: string;
}
