import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Mobility } from 'src/model/mobility.entity';
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
    public async getMobilitiesByUserId(@Param('id') id: string) {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesByUserId(id);
        // if (mobilities[0] === undefined) {
        //     throw new BadRequestException('Invalid userId');
        // }
        return mobilities;
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
        return this.mobilityService.removeMobility(id);
    }

}
