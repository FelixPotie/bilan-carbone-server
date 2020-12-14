import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminDto } from '../dto/admin.dto';
import { AdminService } from '../service/admin.service';


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) { }

    @UseGuards(AuthGuard('admin'))
    @Get()
    public async getAdmins() {
        return await this.adminService.getAdmins();
    }

    @UseGuards(AuthGuard('admin'))
    @Post()
    public async addAdmin(@Body() adminDto: AdminDto) {
        return this.adminService.addAdmin(adminDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Get('profile')
    public async getProfile(@Request() req) {
        return await this.adminService.getAdmin(req.user.id);
    }

    @UseGuards(AuthGuard('admin'))
    @Get(':id')
    public async getAdmin(@Param('id') id: number) {
        return await this.adminService.getAdmin(id);
    }

    @UseGuards(AuthGuard('admin'))
    @Put(':id')
    public async updateUser(@Param('id') id: number, @Body() userDto: AdminDto) {
        return this.adminService.updateAdmin(id, userDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Delete(':id')
    public async removeUser(@Param('id') id: number) {
        return this.adminService.removeAdmin(id);
    }

}
