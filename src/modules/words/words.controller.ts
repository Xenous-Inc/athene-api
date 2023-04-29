import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWordDto } from './dto/words.dto';
import { WordResponse } from './types/responses';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @ApiOperation({ summary: 'Create word' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Returns word record' })
    @Post()
    create(@Body() dto: CreateWordDto) {
        return this.wordsService.create(dto);
    }

    @ApiOperation({ summary: 'Get all words' })
    @ApiResponse({ status: HttpStatus.OK, type: [WordResponse], description: 'Returns word records' })
    @Get()
    findAll() {
        return this.wordsService.findAll();
    }
}
