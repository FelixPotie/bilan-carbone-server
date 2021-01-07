import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDepartment } from '../model/userDepartment.entity';
import { UserDepartmentDto } from '../dto/userDepartment.dto';

@Injectable()
export class UserDepartmentService {
    constructor(
        @InjectRepository(UserDepartment) private readonly userDepartementRepository: Repository<UserDepartment>,
    ) { }

    public async getUserDepartments() {
        return await this.userDepartementRepository.find();
    }

    public async addUserDepartment(userDepartmentDto: UserDepartmentDto) {
        return await this.userDepartementRepository.save(userDepartmentDto);
    }

    public async updateUserDepartment(id: string, userDepartmentDto: UserDepartmentDto) {
        return await this.userDepartementRepository.update(id, userDepartmentDto);
    }

    public async removeUserDepartment(id: string) {
        return await this.userDepartementRepository.delete(id);
    }
}
