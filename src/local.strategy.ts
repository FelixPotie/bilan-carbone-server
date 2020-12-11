import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
      super();
    }
  
    public async validate(email: string, password: string) {
      const admin = await this.authService.validateAdmin(email, password);
      console.log(admin)
      if (!admin) {
        throw new UnauthorizedException();
      }
      return admin;
    }
  }