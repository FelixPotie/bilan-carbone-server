import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users = [
        { id: 1, name: "Felix"},
        { id: 2, name: "Mathis"},
        { id: 3, name: "Simon"}
    ]

    getUsers() {
        return this.users
    }

    addUser(user) {
        this.users = [...this.users, { ...user }]
    }

    updateTodo(user) {
        this.users = this.users.map(t => {
            if (t.id == user.id) {
                return { ...user }
            }
            return t
        })
    }
    deleteProduct(id) {
        this.users = this.users.filter(t => t.id != id)
    }
}
