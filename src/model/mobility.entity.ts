import { UserDepartmentDto } from 'src/dto/userDepartment.dto';
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { MobilityType } from './mobilityType.entity';
import { Travel } from './travel.entity';
import { UserDepartment } from './userDepartment.entity';

// export enum MobilityType {
//     Semester = "SEMESTER",
//     Internship = "INTERNSHIP",
//     Caesura = "CAESURA",
// }

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    user_id: string;

    @ManyToOne(() => UserDepartment, userDepartment => userDepartment.mobilities, {nullable: false})
    user_department: String;

    @Column({
        type: 'enum',
        enum: MobilityType})
    type: MobilityType;

    @Column({length: 255})
    place: string;

    @Column()
    year: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @OneToMany(() => Travel, travel => travel.mobility, {cascade : true})
    travels: Travel[];
}