import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { TravelService } from '../service/travel.service';
import { TravelDto } from '../dto/travel.dto';
import { AuthGuard } from '@nestjs/passport';
import { TravelTypeNotAvailableErrorFilter } from '../filter/travel-type-error.filter';

@UseFilters(new TravelTypeNotAvailableErrorFilter())
@Controller('travel')
export class TravelController {
    constructor(private travelService: TravelService) { }

    @UseGuards(AuthGuard('user'))
    @Get()
    public async getTravels() {
        return await this.travelService.getTravels();
    }

    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getTravel(@Param('id') id: number) {
        return await this.travelService.getTravel(id);
    }

    @UseGuards(AuthGuard('user'))
    @Get('/mobility/:id')
    public async getTravelsByMobilities(@Param('id') id: number) {
        return await this.travelService.getTravelsByMobilities(id);
    }

    @UseGuards(AuthGuard('user'))
    @Post()
    public async addTravel(@Body() travelDto: TravelDto) {
        return await this.travelService.addTravel(travelDto);
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateTravel(@Param('id') id: number, @Body() travelDto: TravelDto) {
        return this.travelService.updateTravel(id, travelDto);
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeTravel(@Param('id') id: number) {
        return this.travelService.removeTravel(id);
    }
}
