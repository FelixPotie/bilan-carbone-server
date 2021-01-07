import {  Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Mobility } from './mobility.entity';

@Entity('userDepartments')
export class UserDepartment {
    
    @PrimaryColumn({length: 50, nullable: false})
    name: string;

    @OneToMany(() => Mobility, mobility => mobility.user_department)
    mobilities: Mobility[];

}