import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { MobilityFilterDTO } from '../dto/filter.dto';
import { Mobility } from '../model/mobility.entity';
import { MobilityDto } from '../dto/mobility.dto';
import { MobilityService } from '../service/mobility.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('mobility')
export class MobilityController {
    constructor(private mobilityService: MobilityService) { }

    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getMobility(@Param('id') id: number) {
        return await this.mobilityService.getMobility(id);
    }

    @UseGuards(AuthGuard('user'))
    @Get('/user/:id')
    public async getMobilitiesByUserId(@Param('id') id: string) {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesByUserId(id);
        return mobilities;
    }

    @UseGuards(AuthGuard('admin'))
    @Post('/export/')
    public async getMobilitiesWithFilter(@Body() filters: MobilityFilterDTO) {
        const mobilities: Mobility[] = await this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
        const filteredMobilities = mobilities.filter(mobility => {
            const startDate = new Date(filters.startDate);
            const endDate = new Date(filters.endDate);
            return ( filters.departmentStatus.includes(mobility.departmentType.status) &&
            filters.derpartmentTypeName.includes(mobility.departmentTypeName) &&
            filters.mobilityType.includes(mobility.type) && 
            filters.schoolYear.includes(mobility.year) &&
            startDate <= mobility.startDate &&
            endDate >= mobility.startDate );
        });
        return filteredMobilities;
    }

    @Get()
    public async getMobilitiesForStatistics() {
        return this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
    }

    @UseGuards(AuthGuard('user'))
    @Post()
    public async addMobility(@Body() mobilityDto: MobilityDto) {
        return this.mobilityService.addMobility(mobilityDto);
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateMobility(@Param('id') id: number, @Body() mobilityDto: MobilityDto) {
        return this.mobilityService.updateMobility(id, mobilityDto);
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeMobility(@Param('id') id: number) {
        return this.mobilityService.removeMobility(id);
    }

}
