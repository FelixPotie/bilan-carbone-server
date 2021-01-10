import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { MobilityType } from './mobilityType.entity';
import { Travel } from './travel.entity';
import { DepartmentType } from './departmentType.entity';

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    userId: string;

    @ManyToOne(() => DepartmentType, departmentType => departmentType.mobilities, {nullable: false})
    user_department_name: String;

    @Column({
        type: 'enum',
        enum: MobilityType})
    type: MobilityType;

    @Column({length: 255})
    place: string;

    @Column()
    year: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @OneToMany(() => Travel, travel => travel.mobility, {cascade : true})
    travels: Travel[];
}