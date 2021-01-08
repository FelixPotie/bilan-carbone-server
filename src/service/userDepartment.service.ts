import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentType } from '../model/departmentType.entity';
import { UserDepartmentDto } from '../dto/userDepartment.dto';

@Injectable()
export class UserDepartmentService {
    constructor(
        @InjectRepository(DepartmentType) private readonly userDepartementRepository: Repository<DepartmentType>,
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
