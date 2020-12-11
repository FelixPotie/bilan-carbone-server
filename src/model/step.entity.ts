import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Travel } from './travel.entity';

@Entity('steps')
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Travel, travel => travel.steps, {onDelete: 'CASCADE'})
    @JoinColumn()
    travel: Travel;

    @Column()
    rank: number;

    @Column({length: 255})
    departure: string;

    @Column({length: 255})
    arrival: string;

    @Column()
    distance: number;

    @Column({length: 100})
    means_of_transport: string;

    @Column()
    carbone_emission: number;

}