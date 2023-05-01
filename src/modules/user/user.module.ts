import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UsersResponse } from './types/responses';

@Module({
    imports: [PrismaModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
