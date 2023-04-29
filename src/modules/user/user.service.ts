import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { secureUser } from '../../security/user.security';
import { UserRole } from '@prisma/client';
import { UsersResponse } from './types/responses';
import { UserAlreadyExistException } from '../../exceptions/user/user-already-exist.exception';
import { UserNotFoundException } from '../../exceptions/user/user-not-found.exception';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}
    async createUser(dto: CreateUserDto): Promise<UsersResponse> {
        const user = await this.prisma.user.create({ data: { ...dto, role: [UserRole.Student] } });
        if (!user) {
            throw new UserAlreadyExistException();
        }
        return user;
    }
    async findUserById(id: string): Promise<UsersResponse> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        if (!user) {
            throw new UserNotFoundException();
        }
        return user;
    }

    async findAllUsers(): Promise<UsersResponse[]> {
        const users = await this.prisma.user.findMany();
        return users.map(e => secureUser(e));
    }
    async updateUser(dto: UpdateUserDto, id: string): Promise<UsersResponse> {
        const user = await this.prisma.user.update({ where: { id }, data: dto });
        if (!user) {
            throw new UserNotFoundException();
        }
        return user;
    }
    async deleteUser(id: string): Promise<UsersResponse> {
        const user = await this.prisma.user.delete({ where: { id } });
        if (!user) {
            throw new UserNotFoundException();
        }
        return user;
    }
}
