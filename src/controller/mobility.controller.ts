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
    public async getMobilitiesWithFilter(@Body() filters: MobilityFilterDTO) {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
        const filteredMobilities = mobilities.filter(mobility => {
            return ( filters.departmentStatus.includes(mobility.departmentType.status) &&
            filters.derpartmentTypeName.includes(mobility.departmentTypeName) &&
            filters.mobilityType.includes(mobility.type) && 
            filters.schoolYear.includes(mobility.year) &&
            filters.startYear.includes(mobility.startDate.getFullYear()));
        });
        
        return filteredMobilities;
    }

    @Get('/statistics/')
    public async getMobilitiesForStatistics() {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
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
