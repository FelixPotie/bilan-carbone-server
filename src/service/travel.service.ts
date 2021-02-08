import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDto } from '../dto/travel.dto';
import { Repository } from 'typeorm';
import { Travel, TravelType } from '../model/travel.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MobilityService } from './mobility.service';
import { TravelTypeNotAvailableException } from '../exception/travel-type-not-available.exception';
import { throws } from 'assert';

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

    public async getTravel(id: number, username: string) {
        return await this.travelRepository.createQueryBuilder("travels")
        .leftJoinAndSelect("mobilities", "m", "m.id = travels.mobilityId")
        .where("m.userId = :userId", { userId: username})
        .andWhere("travels.id = :travelId", {travelId: id})
        .getOne()
    }

    public async getTravelsByMobilities(mobilityId: number) {
        return await this.travelRepository.find({ where: { mobilityId: mobilityId } });
    }

    /**
     * 
     * @param travelDto travel type cannot be duplicate for one mobility
     * 
     * @returns Pormise<Travel>
     * @throws TravelTypeNotAvailableException 
     */
    public async addTravel(travelDto: TravelDto) {   
        return this.mobilityService.getMobility(travelDto.mobilityId).then(mobility => {
            return this.isTravelTypeAvailable(mobility.travels,travelDto.type)
        }).then(async isTravelTypeAvailable => {
            if(isTravelTypeAvailable){
                const rep = await this.travelRepository.save(travelDto);
                if (rep)
                    this.eventEmitter.emit(
                        'travel',
                        new TravelAddedEvent({
                            mobilityId: travelDto.mobilityId,
                            travelType: travelDto.type
                        }
                        ) 
                    );
                return rep;
            } else {
                throw new TravelTypeNotAvailableException();
            }
        })
    }

    public async updateTravel(id: number, travelDto: TravelDto) {
        return this.mobilityService.getMobility(travelDto.mobilityId).then(mobility => {
            const travelExceptThisOne = mobility.travels.filter(travel => travel.id !== id);
            return this.isTravelTypeAvailable(travelExceptThisOne,travelDto.type)
        }).then(async isTravelTypeAvailable => {
            if(isTravelTypeAvailable){
                return this.travelRepository.update(id, travelDto);
            } else {
                throw new TravelTypeNotAvailableException();
            }
        })
        
    }

    public async removeTravel(id: number) {
        return await this.travelRepository.delete(id);
    }

    /////////////////////////// private methode ///////////////////////////////////

    private  isTravelTypeAvailable(travels: Travel[], travelType: TravelType) { 
        return !(travels.map(travel => {
            return travel.type
        }).includes(travelType));
    }
}
