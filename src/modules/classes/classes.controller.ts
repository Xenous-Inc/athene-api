import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassResponse } from './types/responses/class.response';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classService: ClassesService) {}

    @ApiOperation({ summary: 'Create class' })
    @ApiResponse({ status: HttpStatus.CREATED, type: ClassResponse, description: 'Returns class record' })
    @Post()
    async create(@Body() dto: CreateClassDto): Promise<ClassResponse> {
        return await this.classService.create(dto);
    }

    @ApiOperation({ summary: 'Get all classes' })
    @ApiResponse({ status: HttpStatus.OK, type: [ClassResponse], description: 'Returns class records' })
    @Get()
    async findAll(): Promise<ClassResponse[]> {
        return await this.classService.findAll();
    }

    @ApiOperation({ summary: 'Get class by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: ClassResponse, description: 'Returns class record' })
    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<ClassResponse> {
        return await this.classService.findClassById(id);
    }

    @ApiOperation({ summary: 'Update class' })
    @ApiResponse({ status: HttpStatus.OK, type: ClassResponse, description: 'Returns class record' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateClassDto) {
        return await this.classService.update(id, dto);
    }

    @ApiOperation({ summary: 'Delete class by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: ClassResponse, description: 'Returns class record' })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ClassResponse> {
        return await this.classService.delete(id);
    }
}
