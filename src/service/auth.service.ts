import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtService } from '@nestjs/jwt';
import * as ldap from 'ldapjs';

@Injectable()
export class AuthService {
    constructor(
        private adminService: AdminService,
        private jwtService: JwtService
    ) { }

    //Validate function

    public async validateAdmin(username: string, password: string) {
        const admin = await this.adminService.getAdminByUsername(username);
        if (admin && admin.password === password) {
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }

    public async validateUser(username: string, password: string) {

        const bind: any = await this.handleBind({
            username: username,
            password: password
        });
        if(bind.success === true )
            return {
                username: username
            };
        return null;
    }

    private handleBind(req: any){
        let ldapClient = ldap.createClient({
            url: process.env.LDAP_URL
        });
        return new Promise((resolve) => {
            ldapClient.bind(`${req.username}@isim.intra`, req.password, (err) => {
                if (err) {
                    return resolve({
                        success: false
                    })
                }
                return resolve({
                    success: true
                })
            })
        });
    }



    // Login function

    public async login(admin: any) {
        const payload = { username: admin.username, sub: admin.id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    public async loginUser(user: any){
        const payload = {
            username: user.username
        };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    
}