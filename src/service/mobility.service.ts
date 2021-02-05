import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mobility } from '../model/mobility.entity';
import { MobilityDto } from '../dto/mobility.dto';

@Injectable()
export class MobilityService {
    constructor(
        @InjectRepository(Mobility) private readonly mobilityRepository: Repository<Mobility>,
    ) { }

    public async getMobilities() {
        return await this.mobilityRepository.find();
    }

    public async getMobility(id: number) {
        return await this.mobilityRepository.findOne( id, {relations: ['travels']});
    }

    public async getMobilitiesByUserId(user_id: string) {
        return await this.mobilityRepository.createQueryBuilder("mobilities")
        .where("mobilities.userId = :id", {id:user_id})
        .leftJoinAndSelect("mobilities.travels", "travels")
        .leftJoinAndSelect("travels.steps", "steps")
        .leftJoinAndSelect("mobilities.departmentType", "departmentType")
        .getMany();
    }

    public async getMobilitiesWithTravelsStepsDepartment() {
        return await this.mobilityRepository.createQueryBuilder("mobilities")
        .leftJoinAndSelect("mobilities.travels", "travels")
        .leftJoinAndSelect("travels.steps", "steps")
        .leftJoinAndSelect("mobilities.departmentType", "departmentType")
        .getMany();
    }

    public async getMobilitiesWithOutUserId() {
        return await this.mobilityRepository.createQueryBuilder("mobilities")
            .leftJoinAndSelect("mobilities.travels", "travels")
            .leftJoinAndSelect("travels.steps", "steps")
            .leftJoinAndSelect("mobilities.departmentType", "departmentType")
            .getMany()
            .then(mobilities => {
                return mobilities.map((mobility: Mobility) => {
                    return (
                        {
                            departmentTypeName: mobility.departmentTypeName,
                            type: mobility.type,
                            year: mobility.year,
                            startDate: mobility.startDate,
                            endDate: mobility.endDate,
                            travels: mobility.travels,
                            departmentType: mobility.departmentType
                        })
                })
        });
    }

    public async addMobility(mobilityDto: MobilityDto) {
        return await this.mobilityRepository.save(mobilityDto);
    }

    public async updateMobility(id: number, mobilityDto: MobilityDto) {
        return await this.mobilityRepository.update(id, mobilityDto);
    }

    public async removeMobility(id: number) {
        return await this.mobilityRepository.delete(id);
    }

    public async isUserOwnMobility(id: number, username: string) {
        return this.mobilityRepository.findOne( id, {where: {userId: username}}).then(mobility => {
            return !(typeof mobility === 'undefined')
        });
    }

    public async isUserOwnTravel(id: number, travelId: number, username: string) {
        this.getMobilityByUser(id, username).then()
    }
    public async getMobilityByUser(id: number, username: string) {
        return await this.mobilityRepository.createQueryBuilder("mobilities")
        .where("mobilities.userId = :userId", { userId: username})
        .andWhere("mobilities.id = :id", { id: id})  
        .leftJoinAndSelect("mobilities.travels", "travels")
        .leftJoinAndSelect("travels.steps", "steps")
        .getOne();
    }

    public async getMobilityByTravelIdAndUser(travelId: number, username: string) {
        console.log(username);
        return await this.mobilityRepository.createQueryBuilder("mobilities")
        .leftJoinAndSelect("mobilities.travels", "travels")
        .where("mobilities.userId = :userId", { userId: username})
        .andWhere("travels.id = :travelId", { travelId: travelId})
        .getOne();
    }
}
