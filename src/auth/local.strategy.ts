import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
      super();
    }
  
    public async validate(username: string, password: string) {
      const admin = await this.authService.validateAdmin(username, password);
      if (!admin) {
        throw new UnauthorizedException();
      }
      return admin;
    }
  }