import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('users') // runtime erreur if mismatch db
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column()
    courses!: string;

    @Column({
        name: "school_year"
    })
    schoolYear!: number;
}