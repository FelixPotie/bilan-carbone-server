import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mobility } from '../model/mobility.entity';
import { MobilityDto } from '../dto/mobility.dto';
import { Travel } from '../model/travel.entity';

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
        return await this.mobilityRepository.find({ where :{user_id : user_id}});
    }

    public async getMobilitiesWithTravelAndStep() {
        return await this.mobilityRepository.find({ relations:["travels"]});
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
