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
        if (bind.success === true) {
            const search: any = await this.handleSearch({
                username: username,
                password: password
            })
            const user = search.user
            if (user) {
                return {
                    username: username,
                    department: user.department,
                    mail: user.mail,
                    departmentNumber: user.departmentNumber
                };
            }
        }
        return null;
    }

    private handleBind(req: any) {
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

    private handleSearch(req: any) {
        let ldapClient = ldap.createClient({
            url: process.env.LDAP_URL,
            bindDN: `${req.username}@isim.intra`,
            bindCredentials: req.password
        })

        const opts: ldap.SearchOptions = {
            filter: `(|(cn=${req.username})(dn=${req.username}))`,
            scope: 'sub',
            attributes: ["cn", 'department', 'departmentNumber', 'mail']
        };

        return new Promise((resolve) => {
            ldapClient.search(' OU=Etudiants, OU=Comptes,DC=isim, DC=intra', opts, (err, res) => {
                if (err) {
                    return resolve({
                        user: null,
                        msg: `error on connection : ${err}`
                    })
                } else {
                    res.on('searchEntry', function (entry) {
                        return resolve({
                            user: entry.object,
                            msg: "ok"
                        })
                    });
                    res.on('error', function (err) {
                        return resolve({
                            user: null,
                            msg: `error on search : ${err}`
                        })
                    });
                    res.on('end', function (result) {
                        return resolve({
                            user: null,
                            msg: `function ended : ${result}`
                        })
                    });
                }
            })
        })
    }



    // Login function

    public async login(admin: any) {
        const payload = { username: admin.username, sub: admin.id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    public async loginUser(user: any) {
        const payload = {
            username: user.username,
            mail: user.mail,
            department: user.department,
            departmentNumber: user.departmentNumber
        };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }


}