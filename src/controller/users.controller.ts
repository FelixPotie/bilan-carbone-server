import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    public async getUsers() {
        return await this.usersService.getUsers();
    }

    @Get(':id')
    public async getUser(@Param('id') id: number) {
        return await this.usersService.getUser(id);
    }

    @Post()
    public async addUser(@Body() userDto: UserDto){
        return this.usersService.addUser(userDto);
    }

    @Put(':id')
    public async updateUser(@Param('id') id: number, @Body() userDto: UserDto){
        return this.usersService.updateUser(id, userDto);
    }

    @Delete(':id')
    public async removeUser(@Param('id') id: number) {
        return this.usersService.removeUser(id);
    }

}
