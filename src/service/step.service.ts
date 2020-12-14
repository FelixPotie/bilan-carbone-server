import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StepDto } from '../dto/step.dto';
import { Repository } from 'typeorm';
import { Step } from '../model/step.entity';

@Injectable()
export class StepService {
    constructor(
        @InjectRepository(Step) private readonly stepRepository: Repository<Step>,
    ) { }

    public async getSteps() {
        return await this.stepRepository.find({ relations: ["travel"]});
    }

    public async getStep(id: number) {
        return await this.stepRepository.findOne({ id: id });
    }

    public async getStepsByTravel(travelId: number) {
        return await this.stepRepository.find({ where :{travel : travelId}});
    }

    public async addStep(stepDto: StepDto) {
        return await this.stepRepository.save(stepDto);
    }

    public async updateStep(id: number, stepDto: StepDto) {
        return await this.stepRepository.update(id, stepDto);
    }

    public async removeStep(id: number) {
        return await this.stepRepository.delete(id);
    }
}
