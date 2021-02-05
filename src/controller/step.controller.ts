import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StepService } from '../service/step.service';
import { StepDto } from '../dto/step.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('step')
export class StepController {
    constructor(private stepService: StepService) { }

    //to delete
    @UseGuards(AuthGuard('user'))
    @Get()
    public async getSteps() {
        return await this.stepService.getSteps();
    }
    //to delete
    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getStep(@Param('id') id: number) {
        return await this.stepService.getStep(id);
    }
//vérifier que c'est sont trajet 
    @UseGuards(AuthGuard('user'))
    @Get('/travel/:id')
    public async getStepsByTravel(@Param('id') id: number) {
        return await this.stepService.getStepsByTravel(id);
    }
//vérifier que c'est sont trajet 
    @UseGuards(AuthGuard('user'))
    @Post()
    public async addStep(@Body() stepDto: StepDto) {
        return this.stepService.addStep(stepDto);
    }
//vérifier que c'est son step et que le trajet ne change pas 
    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateStep(@Param('id') id: number, @Body() stepDto: StepDto) {
        return this.stepService.updateStep(id, stepDto);
    }
//vérifier que c'est son step 
    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeStep(@Param('id') id: number) {
        return this.stepService.removeStep(id);
    }

}
