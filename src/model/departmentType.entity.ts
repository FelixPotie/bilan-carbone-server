import {  Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Mobility } from './mobility.entity';

export enum DepartmentStatus {
    FISA = "FISA",
    FISE = "FISE"
}

@Entity('departmentType')
export class DepartmentType {
    
    @PrimaryColumn({length: 50, nullable: false})
    name: string;

    @Column({
        type:'enum',
        enum: DepartmentStatus
    })
    status: DepartmentStatus

    @OneToMany(() => Mobility, mobility => mobility.departmentType)
    mobilities: Mobility[];

}