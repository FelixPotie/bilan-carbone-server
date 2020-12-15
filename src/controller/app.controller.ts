import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AppService } from '../service/app.service';
import { AdminAuthGuard } from '../auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(AdminAuthGuard)
    @Post('admin/auth')
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
