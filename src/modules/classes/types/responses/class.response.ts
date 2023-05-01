import { ApiProperty } from '@nestjs/swagger';
import { TSecuredClass } from 'src/security/class.security';

export class ClassResponse implements TSecuredClass {
    @ApiProperty({ example: 'UIs123', description: 'ID' })
    id: string;
    @ApiProperty({ description: 'Keeps ID of teacher' })
    teacherId: string;
    @ApiProperty({ description: 'something about Class' })
    description: string;
    @ApiProperty({ example: 'School rap', description: 'Class name' })
    title: string;
}
