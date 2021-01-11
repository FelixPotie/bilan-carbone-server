import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { MobilityFilterDTO } from '../dto/filter.dto';
import { Mobility } from '../model/mobility.entity';
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

    @Post('/export/')
    public async getMobilitiesWithFilter(@Body() filter: MobilityFilterDTO) {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
        mobilities.filter(mobility => {
          //  filter.department_status.includes(mobility.id)
        });
        console.log(mobilities[0]);
        console.log(mobilities[0].travels);
        console.log(mobilities[0].travels[0]);
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
