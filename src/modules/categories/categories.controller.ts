import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoryResponse } from './types/responses/category.response';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryToUserResponse } from './types/responses/category-to-user.response';
import { SubscribeCategoryDto } from './dto/subscribe-category.dto';
import { WordToCategoryDto } from './dto/word-to-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}
    @ApiOperation({ summary: 'Create category' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Returns category record' })
    @Post(':id')
    createCategory(@Param('id') id: string, @Body() dto: CreateCategoryDto): Promise<CategoryResponse> {
        return this.categoriesService.createCategory(id, dto);
    }

    @ApiOperation({ summary: 'Get category by ID' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Returns category record' })
    @Get(':id')
    getCategoryById(@Param('id') id: string): Promise<CategoryResponse> {
        return this.categoriesService.getCategoryById(id);
    }
    @ApiOperation({ summary: 'Get all categories' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Returns category record' })
    @Get()
    getAllCategories(): Promise<CategoryResponse[]> {
        return this.categoriesService.getAllCategories();
    }
    @ApiOperation({ summary: 'Get all categories by user' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Returns category record' })
    @Get('user/:id')
    getAllCategoriesByUser(@Param('id') userId: string): Promise<CategoryToUserResponse[]> {
        return this.categoriesService.getAllCategoriesByUser(userId);
    }
    @ApiOperation({ summary: 'Update category' })
    @ApiResponse({ status: HttpStatus.OK, type: CategoryResponse, description: 'Returns category record' })
    @Patch(':id')
    updateCategory(@Param('id') id: string, @Body() dto: UpdateCategoryDto): Promise<CategoryResponse> {
        return this.categoriesService.updateCategory(dto, id);
    }
    @ApiOperation({ summary: 'Delete category by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: CategoryResponse, description: 'Returns category record' })
    @Delete(':id')
    deleteCategory(@Param('id') id: string): Promise<CategoryResponse> {
        return this.categoriesService.deleteCategory(id);
    }
    @ApiOperation({ summary: 'Subscribe category' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Returns category record' })
    @Post('subscribe/:id')
    subscribeCategory(@Param('id') id: string, @Body() dto: SubscribeCategoryDto): Promise<CategoryToUserResponse> {
        return this.categoriesService.subscribeCategory(dto, id);
    }
    @ApiOperation({ summary: 'Add a word to category' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Returns words in this category' })
    @Post('/add/:id')
    addWordToCategory(@Param('id') id: string, @Body() dto: WordToCategoryDto): Promise<CategoryResponse> {
        return this.categoriesService.addWordToCategory(dto, id);
    }
}
