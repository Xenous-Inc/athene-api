import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWordDto } from './dto/create-words.dto';
import { UpdateWordDto } from './dto/update-words.dto';
import { WordResponse } from './types/responses';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @ApiOperation({ summary: 'Create word' })
    @ApiResponse({ status: HttpStatus.CREATED, type: WordResponse, description: 'Returns Language record' })
    @Post()
    async create(@Body() dto: CreateWordDto): Promise<WordResponse> {
        return await this.wordsService.create(dto);
    }

    @ApiOperation({ summary: 'Get all words' })
    @ApiResponse({ status: HttpStatus.OK, type: [WordResponse], description: 'Returns word records' })
    @Get()
    async findAll(): Promise<WordResponse[]> {
        return await this.wordsService.findAll();
    }

    @ApiOperation({ summary: 'Get word by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: WordResponse, description: 'Returns word record' })
    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<WordResponse> {
        return await this.wordsService.findWordById(id);
    }

    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({ status: HttpStatus.OK, type: WordResponse, description: 'Returns user record' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateWordDto) {
        return await this.wordsService.update(id, dto);
    }

    @ApiOperation({ summary: 'Delete word by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: WordResponse, description: 'Returns word record' })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<WordResponse> {
        return await this.wordsService.delete(id);
    }
}
