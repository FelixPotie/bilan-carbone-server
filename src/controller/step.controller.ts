import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StepService } from '../service/step.service';
import { StepDto } from '../dto/step.dto';


@Controller('step')
export class StepController {
    constructor(private stepService: StepService) { }

    @Get()
    public async getSteps() {
        return await this.stepService.getSteps();
    }

    @Get(':id')
    public async getStep(@Param('id') id: number) {
        return await this.stepService.getStep(id);
    }

    @Get('/travel/:id')
    public async getStepsByTravel(@Param('id') id: number) {
        return await this.stepService.getStepsByTravel(id);
    }

    @Post()
    public async addStep(@Body() stepDto: StepDto) {
        return this.stepService.addStep(stepDto);
    }

    @Put(':id')
    public async updateStep(@Param('id') id: number, @Body() stepDto: StepDto) {
        return this.stepService.updateStep(id, stepDto);
    }

    @Delete(':id')
    public async removeStep(@Param('id') id: number) {
        return this.stepService.removeStep(id);
    }

}
