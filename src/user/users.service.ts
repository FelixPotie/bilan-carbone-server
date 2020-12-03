import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) {}
    // users = [
    //     { id: 1, name: "Felix"},
    //     { id: 2, name: "Mathis"},
    //     { id: 3, name: "Simon"}
    // ]

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // addUser(user) {
    //     this.users = [...this.users, { ...user }]
    // }

    // updateTodo(user) {
    //     this.users = this.users.map(t => {
    //         if (t.id == user.id) {
    //             return { ...user }
    //         }
    //         return t
    //     })
    // }
    // deleteProduct(id) {
    //     this.users = this.users.filter(t => t.id != id)
    // }
}
