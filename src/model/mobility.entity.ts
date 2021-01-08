import { UserDepartmentDto } from 'src/dto/userDepartment.dto';
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Travel } from './travel.entity';
import { UserDepartment } from './userDepartment.entity';

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    userId: string;

    @ManyToOne(() => UserDepartment, userDepartment => userDepartment.mobilities, {nullable: false})
    user_department: String;

    @ManyToOne(() => DepartmentType, departmentType => departmentType.mobilities, {nullable: false})
    departmentType!: DepartmentType;

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