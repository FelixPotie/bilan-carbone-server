import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminDto } from '../dto/admin.dto';
import { AdminService } from '../service/admin.service';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('admin')
export class AdminController {
    private readonly logger = new Logger(AdminController.name);
    constructor(private adminService: AdminService) { }

    @UseGuards(AuthGuard('admin'))
    @Get()
    public async getAdmins() {
        this.logger.log('getAdmins : an admin try to get all admins');
        return await this.adminService.getAdmins();
    }

    @UseGuards(AuthGuard('admin'))
    @Post()
    public async addAdmin(@Body() adminDto: AdminDto) {
        this.logger.log('addAdmin : an admin try to update admins '+adminDto.username);
        return this.adminService.addAdmin(adminDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Get('profile')
    public async getProfile(@Request() req) {
        this.logger.log('getProfile : an admin try to get profile '+req.user.id);
        return await this.adminService.getAdmin(req.user.id);
    }

    @UseGuards(AuthGuard('admin'))
    @Get(':id')
    public async getAdmin(@Param('id') id: number) {
        this.logger.log('getAdmin : an admin try to get admin '+id);
        return await this.adminService.getAdmin(id);
    }

    @UseGuards(AuthGuard('admin'))
    @Put(':id')
    public async updateUser(@Param('id') id: number, @Body() userDto: AdminDto) {
        this.logger.log('updateUser : an admin try to update admin '+id);
        return this.adminService.updateAdmin(id, userDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Delete(':id')
    public async removeUser(@Param('id') id: number) {
        this.logger.log('removeUser : an admin try to delete admin '+id);
        return this.adminService.removeAdmin(id);
    }

}
