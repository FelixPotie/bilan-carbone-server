import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('mobilities')
export class Mobility {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.mobilities)
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

}