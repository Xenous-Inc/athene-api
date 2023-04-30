import { Injectable } from '@nestjs/common';
import { LanguageAlreadyExistException } from 'src/exceptions/language/language-already-exist.exception';
import { LanguageNotFoundException } from 'src/exceptions/language/language-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguageResponse } from './respones/language.response';

@Injectable()
export class LanguagesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateLanguageDto): Promise<LanguageResponse> {
        const language = this.prisma.language.create({
            data: dto,
        });
        if (!language) {
            throw new LanguageAlreadyExistException();
        }

        return language;
    }

    async findAll(): Promise<LanguageResponse[]> {
        const languages = this.prisma.language.findMany();
        if (!languages) {
            throw new LanguageNotFoundException();
        }
        return languages;
    }

    async findOne(id: string): Promise<LanguageResponse> {
        const language = await this.prisma.language.findUnique({
            where: { id },
        });
        if (!language) {
            throw new LanguageNotFoundException();
        }
        return language;
    }

    async delete(id: string): Promise<LanguageResponse> {
        const language = await this.findOne(id);
        if (!language) {
            throw new LanguageNotFoundException();
        }
        return this.prisma.language.delete({
            where: { id },
        });
    }
}
