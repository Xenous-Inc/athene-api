import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersResponse } from '../user/types/responses';
import { UserService } from '../user/user.service';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';

@Module({
    imports: [PrismaModule],
    controllers: [ClassesController],
    providers: [ClassesService, UsersResponse],
})
export class ClassesModule {}
