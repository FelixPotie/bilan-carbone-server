import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('admin')
export class Admin {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    username: string;

    @Column({length: 255})
    password: string;
}