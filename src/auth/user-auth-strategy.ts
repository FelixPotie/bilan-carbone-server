import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthUserStrategy extends PassportStrategy(Strategy, 'auth-user') {
    private readonly logger = new Logger(AuthUserStrategy.name);
    constructor(private authService: AuthService) {
        super();
    }

    public async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            this.logger.warn('user : '+username+' connection failed');
            throw new UnauthorizedException();
        }
        this.logger.log('user : '+username+' connection succeeded');
        return user;
    }
}