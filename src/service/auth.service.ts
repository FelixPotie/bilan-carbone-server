import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AuthService {
    constructor(private adminService: AdminService) {}

    public async validateAdmin(username: string, password: string){
        const admin = await this.adminService.getAdmin(username);
        if (admin && admin.password === password){
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }
}