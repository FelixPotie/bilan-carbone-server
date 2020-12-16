import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthUserStrategy extends PassportStrategy(Strategy, 'auth-user') {
    constructor(private authService: AuthService) {
        super();
    }

    public async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password);
        if (!user) throw new UnauthorizedException();
        return user;
    }
}