import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TravelService } from '../service/travel.service';
import { TravelDto } from '../dto/travel.dto';


@Controller('travel')
export class TravelController {
    constructor(private travelyService: TravelService) { }

    @Get()
    public async getTravels() {
        return await this.travelyService.getTravels();
    }

    @Get(':id')
    public async getTravel(@Param('id') id: number) {
        return await this.travelyService.getTravel(id);
    }

    @Get('/mobility/:id')
    public async getTravelsByMobilities(@Param('id') id: number) {
        return await this.travelyService.getTravelsByMobilities(id);
    }

    @Post()
    public async addTravel(@Body() travelDto: TravelDto) {
        return this.travelyService.addTravel(travelDto);
    }

    @Put(':id')
    public async updateTravel(@Param('id') id: number, @Body() travelDto: TravelDto) {
        return this.travelyService.updateTravel(id, travelDto);
    }

    @Delete(':id')
    public async removeTravel(@Param('id') id: number) {
        return this.travelyService.removeTravel(id);
    }

}
