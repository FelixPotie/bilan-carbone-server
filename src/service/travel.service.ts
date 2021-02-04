import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDto } from '../dto/travel.dto';
import { Repository } from 'typeorm';
import { Travel, TravelType } from '../model/travel.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MobilityService } from './mobility.service';

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
        private eventEmitter: EventEmitter2,
        private readonly mobilityService: MobilityService
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

    /**
     * 
     * @param travelDto travel type cannot be duplicate for one mobility
     * 
     */
    public async addTravel(travelDto: TravelDto) {       
        return this.isTravelTypeAvailableProm(travelDto.mobilityId,travelDto.type).then(isTravelTypeAvailable => {
            if(isTravelTypeAvailable){
                return this.travelRepository.save(travelDto).then(rep => {
                    if (rep)
                        this.eventEmitter.emit(
                            'travel',
                            new TravelAddedEvent({
                                mobilityId: travelDto.mobilityId,
                                travelType: travelDto.type
                            }
                            )
                        )
                    return rep
                })
            } else {
                throw new Error('travelTypeNotAvailable');
            }
        })

        
    }

    public async updateTravel(id: number, travelDto: TravelDto) {
        return await this.travelRepository.update(id, travelDto);
    }

    public async removeTravel(id: number) {
        return await this.travelRepository.delete(id);
    }

    /////////////////////////// private methode ///////////////////////////////////

    private async isTravelTypeAvailableProm(mobilityId: number, travelType: TravelType) {
        return this.mobilityService.getMobility(mobilityId)
        .then(mobility => {
            return !(mobility.travels.map(travel => {
                return travel.type
            }).includes(travelType));
        })
    }
}
