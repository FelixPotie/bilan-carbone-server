import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDto } from '../dto/travel.dto';
import { Repository } from 'typeorm';
import { Travel } from '../model/travel.entity';

@Injectable()
export class TravelService {
    constructor(
        @InjectRepository(Travel) private readonly travelRepository: Repository<Travel>,
    ) { }

    public async getTravels() {
        return await this.travelRepository.find({ relations: ["mobility"]});
    }

    public async getTravel(id: number) {
        return await this.travelRepository.findOne({ id: id });
    }

    public async getTravelsByMobilities(mobilityId: number) {
        return await this.travelRepository.find({ where :{mobilityId : mobilityId}});
    }

    public async addTravel(travelDto: TravelDto) {
        return await this.travelRepository.save(travelDto);
    }

    public async updateTravel(id: number, travelDto: TravelDto) {
        return await this.travelRepository.update(id, travelDto);
    }

    public async removeTravel(id: number) {
        return await this.travelRepository.delete(id);
    }
}
