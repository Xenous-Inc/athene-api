import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
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
    create(@Body() dto: CreateWordDto): Promise<WordResponse> {
        return this.wordsService.create(dto);
    }

    @ApiOperation({ summary: 'Get all words' })
    @ApiResponse({ status: HttpStatus.OK, type: [WordResponse], description: 'Returns word records' })
    @Get()
    findAll(): Promise<WordResponse[]> {
        return this.wordsService.findAll();
    }

    @ApiOperation({ summary: 'Get word by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: WordResponse, description: 'Returns word record' })
    @Get(':id')
    findUserById(@Param('id') id: string): Promise<WordResponse> {
        return this.wordsService.findWordById(id);
    }

    @ApiOperation({ summary: 'Delete word by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: WordResponse, description: 'Returns word record' })
    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<WordResponse> {
        return this.wordsService.delete(id);
    }
}
