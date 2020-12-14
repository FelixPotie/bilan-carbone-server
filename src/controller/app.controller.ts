import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AppService } from '../service/app.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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

    @UseGuards(LocalAuthGuard)
    @Post('admin/auth')
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('admin'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
