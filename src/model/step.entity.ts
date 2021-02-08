import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Travel } from './travel.entity';

export enum TransportType {
    TGV = "TGV",
    PLANE = "PLANE",
    CAR = "CAR",
    ELECTRIC_CAR = "ELECTRIC_CAR",
    TER = "TER",
    MOTO = "MOTO", 
    BUS = "BUS"
}
@Entity('steps')
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    travelId: number; 

    @ManyToOne(() => Travel, travel => travel.steps, {onDelete: 'CASCADE', nullable: false})
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

    @Column({
        type:'enum',
        enum: TransportType
    })
    meansOfTransport: TransportType;

    @Column()
    carboneEmission: number;

    @Column({type: 'float8'})
    latDeparture: number;

    @Column({type: 'float8'})
    longDeparture: number;

    @Column({type: 'float8'})
    latArrival: number;

    @Column({type: 'float8'})
    longArrival: number;

}