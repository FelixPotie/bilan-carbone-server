import { PrimaryGeneratedColumn, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('admin')
export class Admin {

    @PrimaryColumn({length: 50})
    email: string;

    @Column({length: 255})
    password: string;
}