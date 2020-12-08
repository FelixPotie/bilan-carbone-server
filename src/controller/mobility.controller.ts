import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TravelService } from '../service/travel.service';
import { MobilityDto } from '../dto/mobility.dto';
import { MobilityService } from '../service/mobility.service';


@Controller('mobility')
export class MobilityController {
    constructor(private mobilityService: MobilityService, private travelService: TravelService) { }
    @Get()
    public async getMobilities() {
        return await this.mobilityService.getMobilities();
    }

    @Get(':id')
    public async getMobility(@Param('id') id: number) {
        return await this.mobilityService.getMobility(id);
    }

    @Get('/user/:id')
    public async getMobilitiesByUserId(@Param('id') id: number) {
        return await this.mobilityService.getMobilitiesByUserId(id);
    }

    @Post()
    public async addMobility(@Body() mobilityDto: MobilityDto) {
        return this.mobilityService.addMobility(mobilityDto);
    }

    @Put(':id')
    public async updateMobility(@Param('id') id: number, @Body() mobilityDto: MobilityDto) {
        return this.mobilityService.updateMobility(id, mobilityDto);
    }

    @Delete(':id')
    public async removeMobility(@Param('id') id: number) {
        this.travelService.
        return this.mobilityService.removeMobility(id);
    }

}
