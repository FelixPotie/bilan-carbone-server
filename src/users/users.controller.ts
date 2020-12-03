import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';


interface usersDto {
    id: string;
    name: string;
}

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
        getTodo(@Param() params) {
        console.log('id', params.id);
        return this.usersService.getUsers().filter(t => t.id == params.id);
    }
    @Post()
    addTodo(@Body() user: usersDto) {
        console.log('user', user);
        this.usersService.addUser(user);
    }
    @Put()
    updateTodo(@Body() user: usersDto) {
        console.log('update user', user);
        this.usersService.updateTodo(user);
    }
    @Delete()
    deleteTodo(@Body() user: usersDto) {
        console.log('delete user', user.id);
        this.usersService.deleteProduct(user.id);
    }
}
