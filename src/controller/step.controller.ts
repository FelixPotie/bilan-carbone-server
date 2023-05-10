import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Headers, Logger } from '@nestjs/common';
import { StepService } from '../service/step.service';
import { StepDto } from '../dto/step.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtCustomService } from '../auth/jwtCustom.service';


@Controller('step')
export class StepController {
    private readonly logger = new Logger(StepController.name);
    constructor(
        private stepService: StepService,
        private jwtCustomService: JwtCustomService) { }

    @UseGuards(AuthGuard('user'))
    @Get('/travel/:id')
    public async getStepsByTravel(@Param('id') id: number,  @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        this.logger.log('getStepsByTravel : user '+username+' try to get the step : '+id);
        return await this.stepService.getStepsByTravel(id, username);
    }
 
    @UseGuards(AuthGuard('user'))
    @Post()
    public async addStep(@Body() stepDto: StepDto,  @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        this.logger.log('addStep : user '+username+' try to add the step from '+stepDto.departure+ ' to '+stepDto.arrival);
        return this.stepService.addStep(stepDto, username);
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateStep(@Param('id') id: number, @Body() stepDto: StepDto,  @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        this.logger.log('updateStep : user '+username+' try to update the step '+ id +' from '+stepDto.departure+ ' to '+stepDto.arrival);
        return this.stepService.updateStep(id, stepDto, username);
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeStep(@Param('id') id: number,  @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        this.logger.log('removeStep : user '+username+' try to remove the step '+ id);
        return this.stepService.removeStep(id, username);
    }

}
