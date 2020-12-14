import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
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
        return await this.adminService.getAdmin(req.user.username);
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
