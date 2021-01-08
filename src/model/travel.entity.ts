import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Mobility } from './mobility.entity';
import { Step } from './step.entity';

export enum TravelType {
    GO = "GO",
    BACK = "BACK"
}
@Entity('travels')
export class Travel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mobilityId: number;
    
    @ManyToOne(() => Mobility, mobility => mobility.travels, {onDelete: 'CASCADE', nullable: false })
    @JoinColumn()
    mobilityId: number;

    @Column()
    date: Date;

    @Column({
        type:'enum',
        enum: TravelType
    })
    type: TravelType;

    @OneToMany(() => Step, step => step.travel, {cascade : true})
    steps: Step[];

    // @Column({length: 255})
    // departure: string;

    // @Column({length: 255})
    // arrival: string;

    // @Column()
    // distance: number;

    // @Column({length: 100})
    // means_of_transport: string;

    // @Column()
    // carbone_emission: number;

}