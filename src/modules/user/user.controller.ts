import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersResponse } from './types/responses';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) {}
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Returns user record' })
    @Post()
    createUser(@Body() dto: CreateUserDto): Promise<UsersResponse> {
        return this.usersService.createUser(dto);
    }
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: UsersResponse, description: 'Returns user record' })
    @Get(':id')
    findUserById(@Param('id') id: string): Promise<UsersResponse> {
        return this.usersService.findUserById(id);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: HttpStatus.OK, type: [UsersResponse], description: 'Returns user records' })
    @Get()
    findAll(): Promise<UsersResponse[]> {
        return this.usersService.findAllUsers();
    }
    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({ status: HttpStatus.OK, type: UsersResponse, description: 'Returns user record' })
    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<UsersResponse> {
        return this.usersService.updateUser(dto, id);
    }
    @ApiOperation({ summary: 'Delete user by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: UsersResponse, description: 'Returns user record' })
    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<UsersResponse> {
        return this.usersService.deleteUser(id);
    }
}
