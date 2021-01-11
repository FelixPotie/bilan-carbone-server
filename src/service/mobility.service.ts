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
        return await this.mobilityRepository.findOne({ id: id });
    }

    public async getMobilitiesByUserId(user_id: string) {
        return await this.mobilityRepository.find({ where :{userId : user_id}});
    }

    public async getMobilitiesWithTravelsStepsDepartment() {
        return await this.mobilityRepository.createQueryBuilder("mobilities")
        .leftJoinAndSelect("mobilities.travels", "travels")
        .leftJoinAndSelect("travels.steps", "steps")
        .leftJoinAndSelect("mobilities.departmentType", "departmentType")
        .getMany();
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
}
