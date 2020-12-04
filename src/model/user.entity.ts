import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: true})
    first_name: string;

    @Column({length: 50, nullable: true})
    last_name: string;

    @Column({nullable: true})
    student_number: number;

    @Column({length: 255, nullable: true})
    email: string;

    @Column({length: 15, nullable: true})
    section: string;

    @Column({length: 15, nullable: true})
    gender: string;

    @Column({nullable: true})
    year: number;

    @Column({length: 15, nullable: true})
    status: string;
}