import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Travel } from './travel.entity';
import { User } from './user.entity';

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.mobilities, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User;

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