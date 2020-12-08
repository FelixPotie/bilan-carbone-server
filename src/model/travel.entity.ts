import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Mobility } from './mobility.entity';

@Entity('travels')
export class Travel {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Mobility, mobility => mobility.travels, {onDelete: 'CASCADE'})
    @JoinColumn()
    mobility: Mobility;

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