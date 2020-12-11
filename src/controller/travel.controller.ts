import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TravelService } from '../service/travel.service';
import { TravelDto } from '../dto/travel.dto';


@Controller('travel')
export class TravelController {
    constructor(private travelService: TravelService) { }

    @Get()
    public async getTravels() {
        return await this.travelService.getTravels();
    }

    @Get(':id')
    public async getTravel(@Param('id') id: number) {
        return await this.travelService.getTravel(id);
    }

    @Get('/mobility/:id')
    public async getTravelsByMobilities(@Param('id') id: number) {
        return await this.travelService.getTravelsByMobilities(id);
    }

    @Post()
    public async addTravel(@Body() travelDto: TravelDto) {
        return this.travelService.addTravel(travelDto);
    }

    @Put(':id')
    public async updateTravel(@Param('id') id: number, @Body() travelDto: TravelDto) {
        return this.travelService.updateTravel(id, travelDto);
    }

    @Delete(':id')
    public async removeTravel(@Param('id') id: number) {
        return this.travelService.removeTravel(id);
    }

}
