import { Injectable } from '@nestjs/common';
import { ClassAlreayExistException } from 'src/exceptions/class/class-already-exist.exception';
import { ClassNotFoundException } from 'src/exceptions/class/class-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassResponse } from './types/responses/class.response';

@Injectable()
export class ClassesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateClassDto): Promise<ClassResponse> {
        const { title, description, teacherId } = dto;
        const classy = await this.prisma.class.create({
            data: { title, description, teacher: { connect: { id: teacherId } } },
        });
        if (!classy) {
            throw new ClassAlreayExistException();
        }
        return classy;
    }
    async findAll(): Promise<ClassResponse[]> {
        const classes = await this.prisma.class.findMany();
        if (!classes) {
            throw new ClassNotFoundException();
        }
        return classes;
    }
    async findClassById(id: string): Promise<ClassResponse> {
        const classy = await this.prisma.class.findUnique({
            where: { id: id },
        });
        if (!classy) {
            throw new ClassNotFoundException();
        }
        return classy;
    }
    async update(id: string, dto: UpdateClassDto): Promise<ClassResponse> {
        const classy = await this.prisma.class.findUnique({
            where: { id },
        });

        if (!classy) {
            throw new ClassNotFoundException();
        }
        const updatedClass = this.prisma.class.update({
            where: { id },
            data: { title: dto.title, description: dto.description },
        });

        return updatedClass;
    }
    async delete(id: string): Promise<ClassResponse> {
        const classy = this.prisma.class.findUnique({ where: { id } });
        if (!classy) {
            throw new ClassNotFoundException();
        }
        return this.prisma.class.delete({ where: { id } });
    }
}
