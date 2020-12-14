import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from '../dto/admin.dto';
import { Repository } from 'typeorm';
import { Admin } from '../model/admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) 
        private readonly adminRepository: Repository<Admin>,
    ) { }

    public async getAdmins() {
        return await this.adminRepository.find();
    }

    public async getAdmin(username: string) {
        return await this.adminRepository.findOne({ where :{username : username}});
    }

    public async addAdmin(adminDto: AdminDto) {
        return await this.adminRepository.save(adminDto);
    }

    // public async updateAdmin(id: number, userDto: AdminDto) {
    //     return await this.adminRepository.update(id, adminDto);
    // }

    // public async removeAdmin(id: number) {
    //     return await this.adminRepository.delete(id);
    // }
}
