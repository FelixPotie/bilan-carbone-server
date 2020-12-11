import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminDto } from '../dto/admin.dto';
import { AdminService } from '../service/admin.service';


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) { }

    @Get()
    public async getAdmins() {
        return await this.adminService.getAdmins();
    }

    @Get(':email')
    public async getAdmin(@Param('email') email: string) {
        return await this.adminService.getAdmin(email);
    }

    @Post()
    public async addAdmin(@Body() adminDto: AdminDto) {
        return this.adminService.addAdmin(adminDto);
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth')
    public async login(@Request() req) {
        console.log(req);
        return req.admin
    }
    // @Put(':id')
    // public async updateUser(@Param('id') id: number, @Body() userDto: AdminDto) {
    //     return this.adminService.updateUser(id, userDto);
    // }

    // @Delete(':id')
    // public async removeUser(@Param('id') id: number) {
    //     return this.adminService.removeUser(id);
    // }

}
