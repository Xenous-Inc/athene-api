import { Injectable } from '@nestjs/common';
import { WordAlreadyExistException } from 'src/exceptions/word/word-already-exist.exception';
import { WordNotFoundException } from 'src/exceptions/word/word-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWordDto } from './dto/words.dto';
import { WordResponse } from './types/responses';

@Injectable()
export class WordsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateWordDto): Promise<WordResponse> {
        const word = await this.prisma.word.create({ data: dto });
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
            where: { id: id },
        });
        if (!word) {
            throw new WordNotFoundException();
        }
        return word;
    }
    async delete(id: string) {
        const word = this.prisma.word.findUnique({ where: { id: id } });
        if (!word) {
            throw new WordNotFoundException();
        }
        return word;
    }
}
