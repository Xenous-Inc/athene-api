import { Injectable } from '@nestjs/common';
import { WordAlreadyExist } from 'src/exceptions/word/word-already-exist.exception';
import { WordNotFound } from 'src/exceptions/word/word-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWordDto } from './dto/words.dto';
import { WordResponse } from './types/responses';

@Injectable()
export class WordsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateWordDto): Promise<WordResponse> {
        const word = this.prisma.word.create({ data: dto });
        if (!word) {
            throw new WordAlreadyExist();
        }
        return word;
    }
    async findAll(): Promise<WordResponse[]> {
        const words = this.prisma.word.findMany();
        if (!words) {
            throw new WordNotFound();
        }
        return words;
    }
}
