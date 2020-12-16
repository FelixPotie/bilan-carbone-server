import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AppService } from '../service/app.service';
import { AdminAuthGuard } from '../auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

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

    @UseGuards(AuthGuard('auth-user'))
    @Post('user/auth')
    public async loginUser(@Request() req){
        return this.authService.loginUser(req.user)
    }

}
