import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDto } from '../dto/travel.dto';
import { Repository } from 'typeorm';
import { Travel } from '../model/travel.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

export class TravelAddedEvent {
    payload: { mobilityId: number; travelType: string; };
    constructor(payload: {
        mobilityId: number,
        travelType: any
    }) {
        this.payload = payload
    }
}

@Injectable()
export class TravelService {
    constructor(
        @InjectRepository(Travel) private readonly travelRepository: Repository<Travel>,
        private eventEmitter: EventEmitter2
    ) { }

    public async getTravels() {
        return await this.travelRepository.find({ relations: ["mobility"] });
    }

    public async getTravel(id: number) {
        return await this.travelRepository.findOne({ id: id });
    }

    public async getTravelsByMobilities(mobilityId: number) {
        return await this.travelRepository.find({ where: { mobilityId: mobilityId } });
    }

    public async addTravel(travelDto: TravelDto) {
        // const rep = await this.travelRepository.save(travelDto);   
        // if (rep)
        this.eventEmitter.emit(
            'travel',
            new TravelAddedEvent({
                mobilityId: travelDto.mobilityId,
                travelType: travelDto.type
            }
            )
        )
        // return rep 
    }

    public async updateTravel(id: number, travelDto: TravelDto) {
        return await this.travelRepository.update(id, travelDto);
    }

    public async removeTravel(id: number) {
        return await this.travelRepository.delete(id);
    }
}
