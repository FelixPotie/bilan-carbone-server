import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StepDto } from '../dto/step.dto';
import { Repository } from 'typeorm';
import { Step } from '../model/step.entity';
import { TravelService } from './travel.service';

@Injectable()
export class StepService {
    private readonly logger = new Logger(StepService.name);
    constructor(
        @InjectRepository(Step) private readonly stepRepository: Repository<Step>,
        private travelService: TravelService
    ) { }

    public async getSteps() {
        return await this.stepRepository.find({ relations: ["travel"]});
    }

    public async getStep(id: number, username: string) {
        return await this.stepRepository.createQueryBuilder("steps")
        .leftJoinAndSelect("travels", "t", "t.id = steps.travelId")
        .leftJoinAndSelect("mobilities", "m", "m.id = t.mobilityId")
        .where("m.userId = :userId", { userId: username})
        .andWhere("steps.id = :id", {id: id})
        .getOne()
    }
    //Can send error if nothin found -> to discuss
    public async getStepsByTravel(travelId: number, username: string) {
        return await this.stepRepository.createQueryBuilder("steps")
        .leftJoinAndSelect("travels", "t", "t.id = steps.travelId")
        .leftJoinAndSelect("mobilities", "m", "m.id = t.mobilityId")
        .where("m.userId = :userId", { userId: username})
        .andWhere("t.id = :travelId", {travelId: travelId})
        .getOne()
    }

    //Can send error if nothin found -> to discuss
    public async getStepByTravelAndId(id: number, travelId: number, username: string) {
        return await this.stepRepository.createQueryBuilder("steps")
        .leftJoinAndSelect("travels", "t", "t.id = steps.travelId")
        .leftJoinAndSelect("mobilities", "m", "m.id = t.mobilityId")
        .where("m.userId = :userId", { userId: username})
        .andWhere("t.id = :travelId", {travelId: travelId})
        .andWhere("steps.id = :id", {id: id})
        .getOne()
    }

    public async addStep(stepDto: StepDto, username: string) {
        const travel = await this.travelService.getTravel(stepDto.travelId, username)
        if (typeof travel === 'undefined') {
            this.logger.error('addStep : user '+username+' failed to add the step from '+stepDto.departure+ ' to '+stepDto.arrival);
            throw new ForbiddenException('travelId not correct');
        } else {
            return await this.stepRepository.save(stepDto);
        }
    }

    public async updateStep(id: number, stepDto: StepDto, username: string) {
        const inUpdateStep = await this.getStepByTravelAndId(id,stepDto.travelId,username )
        if (typeof inUpdateStep === 'undefined') {
            this.logger.error('updateStep : user '+username+' failed to update the step '+ id);
            throw new ForbiddenException('travelId or step id not correct (travelId not updatable)');
        } else {
            return await this.stepRepository.update(id, stepDto);
        }
    }

    public async removeStep(id: number, username: string) {
        const inDeleteStep = await this.getStep(id,username)
        if (typeof inDeleteStep === 'undefined') {
            this.logger.error('removeStep : user '+username+' failed to remove the step '+ id);
            throw new ForbiddenException('stepId not correct, it should exist or be one of yours');
        } else {
            return await this.stepRepository.delete(id);
        }
        
    }
}
