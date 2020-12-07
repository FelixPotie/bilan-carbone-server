import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../dto/user.dto';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
    ) { }

    public async getUsers() {
        return await this.userRepository.find();
    }

    public async getUser(id: number) {
        return await this.userRepository.findOne({ id: id });
    }

    public async addUser(userDto: UserDto) {
        return await this.userRepository.save(userDto);
    }

    public async updateUser(id: number, userDto: UserDto) {
        return await this.userRepository.update(id, userDto);
    }

    public async removeUser(id: number) {
        return await this.userRepository.delete(id);
    }
}
