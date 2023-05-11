import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryResponse } from './types/responses/category.response';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryAlreadyExistException } from '../../exceptions/category/category-already-exist.exception';
import { CategoryNotFoundException } from '../../exceptions/category/category-not-found.exception';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryToUserResponse } from './types/responses/category-to-user.response';
import { UserNotFoundException } from '../../exceptions/user/user-not-found.exception';
import { SubscribeCategoryDto } from './dto/subscribe-category.dto';
import { WordToCategoryDto } from './dto/word-to-category.dto';
import { WordAlreadyExistException } from '../../exceptions/word/word-already-exist.exception';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    async createCategory(dto: CreateCategoryDto): Promise<CategoryResponse> {
        const user = await this.prisma.user.findUnique({ where: { id: dto.authorId } });
        if (!user) {
            throw new UserNotFoundException();
        }
        const category = await this.prisma.category.create({ data: dto });
        await this.subscribeCategory({ userId: dto.authorId, categoryId: category.id });
        if (!category) {
            throw new CategoryAlreadyExistException();
        }
        return category;
    }

    async getCategoryById(id: string): Promise<CategoryResponse> {
        const category = await this.prisma.category.findUnique({
            where: { id: id },
        });
        if (!category) {
            throw new CategoryNotFoundException();
        }
        return category;
    }

    async getAllCategories(): Promise<CategoryResponse[]> {
        const category = await this.prisma.category.findMany();
        if (!category) {
            throw new CategoryNotFoundException();
        }
        return category;
    }

    async getAllCategoriesByUser(userId: string): Promise<CategoryToUserResponse[]> {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new UserNotFoundException();
        }
        const category = await this.prisma.categoryToUser.findMany({
            where: { userId: user.id },
        });
        if (!category) {
            throw new CategoryNotFoundException();
        }
        return category;
    }

    async updateCategory(dto: UpdateCategoryDto, id: string) {
        const category = await this.prisma.category.update({ where: { id }, data: dto });
        if (!category) {
            throw new CategoryNotFoundException();
        }
        return category;
    }

    async deleteCategory(id: string) {
        const category = await this.prisma.category.delete({ where: { id } });
        if (!category) {
            throw new CategoryNotFoundException();
        }
        return category;
    }

    async subscribeCategory(dto: SubscribeCategoryDto): Promise<CategoryToUserResponse> {
        const category = await this.prisma.category.findUnique({ where: { id: dto.categoryId } });
        if (!category) {
            throw new CategoryNotFoundException();
        }
        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) {
            throw new UserNotFoundException();
        }
        const userForCategory = await this.prisma.categoryToUser.create({
            data: { userId: user.id, categoryId: category.id },
        });
        if (!userForCategory) {
            throw new Error('User already subscribed for this category!');
        }
        return userForCategory;
    }

    async addWordToCategory(dto: WordToCategoryDto) {
        // eslint-disable-next-line init-declarations
        let wordToCategory;
        try {
            wordToCategory = await this.prisma.wordToCategory.create({
                data: { wordId: dto.wordId, categoryId: dto.categoryId },
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    throw new WordAlreadyExistException();
                }
            }
        }
        return wordToCategory;
    }
}
