import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);
    constructor(private authService: AuthService) {
      super();
    }
  
    public async validate(username: string, password: string) {
      const admin = await this.authService.validateAdmin(username, password);
      if (!admin) {
        this.logger.warn('admin : '+username+' connection failed');
        throw new UnauthorizedException();
      }
      this.logger.log('admin : '+username+' connection succeeded');
      return admin;
    }
  }