import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private adminService: AdminService,
        private jwtService: JwtService
    ) {}

    public async validateAdmin(username: string, password: string){
        const admin = await this.adminService.getAdmin(username);
        if (admin && admin.password === password){
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }

    public async login(admin: any) {
        const payload = { username: admin.username, sub: admin.username };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}