import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MobilityDto } from '../dto/mobility.dto';
import { MobilityService } from '../service/mobility.service';


@Controller('mobility')
export class MobilityController {
    constructor(private mobilityService: MobilityService) { }

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
    public async addMobility(@Body() userDto: MobilityDto) {
        return this.mobilityService.addMobility(userDto);
    }

    @Put(':id')
    public async updateMobility(@Param('id') id: number, @Body() userDto: MobilityDto) {
        return this.mobilityService.updateMobility(id, userDto);
    }

    @Delete(':id')
    public async removeMobility(@Param('id') id: number) {
        return this.mobilityService.removeMobility(id);
    }

}
