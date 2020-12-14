import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Travel } from './travel.entity';

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    user_id: string;

    @Column({length: 50})
    user_department: string;

    @Column({length: 50})
    user_gender: string;;

    @Column({length: 50})
    type: string;

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