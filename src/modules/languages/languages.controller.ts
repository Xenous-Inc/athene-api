import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguagesService } from './languages.service';
import { LanguageResponse } from './respones/language.response';

@Controller('languages')
export class LanguagesController {
    constructor(private languagesService: LanguagesService) {}

    @ApiOperation({ summary: 'Create language' })
    @ApiResponse({ status: HttpStatus.CREATED, type: LanguageResponse, description: 'Returns Language record' })
    @Post()
    async create(@Body() dto: CreateLanguageDto): Promise<LanguageResponse> {
        return await this.languagesService.create(dto);
    }

    @ApiOperation({ summary: 'Get all languages' })
    @ApiResponse({ status: HttpStatus.OK, type: [LanguageResponse], description: 'Returns language records' })
    @Get()
    async findAll(): Promise<LanguageResponse[]> {
        return await this.languagesService.findAll();
    }

    @ApiOperation({ summary: 'Get language by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: LanguageResponse, description: 'Returns language record' })
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<LanguageResponse> {
        return await this.languagesService.findOne(id);
    }

    @ApiOperation({ summary: 'Delete language by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: LanguageResponse, description: 'Returns language record' })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<LanguageResponse> {
        return await this.languagesService.delete(id);
    }
}
