import { Injectable } from '@nestjs/common';
import { WordAlreadyExistException } from 'src/exceptions/word/word-already-exist.exception';
import { WordNotFoundException } from 'src/exceptions/word/word-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWordDto } from './dto/create-words.dto';
import { UpdateWordDto } from './dto/update-words.dto';
import { WordResponse } from './types/responses';

@Injectable()
export class WordsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateWordDto): Promise<WordResponse> {
        const { value, translation, languageId } = dto;
        const word = await this.prisma.word.create({
            data: { value, translation, language: { connect: { id: languageId } } },
        });
        if (!word) {
            throw new WordAlreadyExistException();
        }
        return word;
    }
    async findAll(): Promise<WordResponse[]> {
        const words = await this.prisma.word.findMany();
        if (!words) {
            throw new WordNotFoundException();
        }
        return words;
    }
    async findWordById(id: string): Promise<WordResponse> {
        const word = await this.prisma.word.findUnique({
            where: { id },
        });
        if (!word) {
            throw new WordNotFoundException();
        }
        return word;
    }
    async update(id: string, dto: UpdateWordDto): Promise<WordResponse> {
        const word = await this.prisma.word.findUnique({
            where: { id },
        });

        if (!word) {
            throw new WordNotFoundException();
        }
        const updatedWord = this.prisma.word.update({
            where: { id },
            data: {
                value: dto.value,
                translation: dto.translation,
            },
        });

        return updatedWord;
    }
    async delete(id: string): Promise<WordResponse> {
        const word = this.prisma.word.findUnique({ where: { id } });
        if (!word) {
            throw new WordNotFoundException();
        }
        return this.prisma.word.delete({ where: { id } });
    }
}
