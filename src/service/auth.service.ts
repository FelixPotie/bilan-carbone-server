import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AuthService {
    constructor(private adminService: AdminService) {}

    public async validateAdmin(email: string, password: string){
        const admin = await this.adminService.getAdmin(email);
        if (admin && admin.password === password){
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }
}