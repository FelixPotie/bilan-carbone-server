import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards, Headers, ForbiddenException } from '@nestjs/common';
import { TravelService } from '../service/travel.service';
import { TravelDto } from '../dto/travel.dto';
import { AuthGuard } from '@nestjs/passport';
import { TravelTypeNotAvailableErrorFilter } from '../filter/travel-type-error.filter';
import { JwtCustomService } from '../auth/jwtCustom.service';
import { MobilityService } from '../service/mobility.service';

@UseFilters(new TravelTypeNotAvailableErrorFilter())
@Controller('travel')
export class TravelController {
    constructor(
        private travelService: TravelService,
        private mobilityService: MobilityService,
        private jwtCustomService: JwtCustomService) { }

    //to delete
    @UseGuards(AuthGuard('user')) 
    @Get()
    public async getTravels() {
        return await this.travelService.getTravels();
    }
    //to delete
    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getTravel(@Param('id') id: number) {
        return await this.travelService.getTravel(id);
    }

    @UseGuards(AuthGuard('user'))
    @Get('/mobility/:id')
    public async getTravelsByMobilities(@Param('id') id: number, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        const isUserOwnMobility = await this.mobilityService.isUserOwnMobility(id, username);
        if(isUserOwnMobility){
            return await this.travelService.getTravelsByMobilities(id);
        } else {
            throw new ForbiddenException('mobilityId not correct');
        }
    }

    @UseGuards(AuthGuard('user'))
    @Post()
    public async addTravel(@Body() travelDto: TravelDto, @Headers('authorization') authToken : string) {
        // we ensure that user add travel to his mobility
        const username = this.jwtCustomService.getUserName(authToken);
        const isUserOwnMobility = await this.mobilityService.isUserOwnMobility(travelDto.mobilityId, username);
        if(isUserOwnMobility){
            return await this.travelService.addTravel(travelDto);
        } else {
            throw new ForbiddenException('mobilityId not correct');
        }
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateTravel(@Param('id') id: number, @Body() travelDto: TravelDto, @Headers('authorization') authToken : string) {
        // we ensure that user cannot set mobilityId that are not his own
        const username = this.jwtCustomService.getUserName(authToken);
        const mobility = await this.mobilityService.getMobilityByUser(travelDto.mobilityId, username)
        if (typeof mobility === 'undefined') {
            throw new ForbiddenException('mobilityId not yours');
        } else {
            // we ensure that user cannot change the mobilityId
            const inUpdateTravel = mobility.travels.find(travel => travel.id === id);
            if (typeof inUpdateTravel === 'undefined' ) { 
                throw new ForbiddenException('TravelId not correspond to mobilityId');
            } else {
                return this.travelService.updateTravel(id, travelDto);
            }
        }
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeTravel(@Param('id') id: number, @Headers('authorization') authToken : string) {
        // we ensure that user cannot delete his own traject
        const username = this.jwtCustomService.getUserName(authToken);
        const mobility = await this.mobilityService.getMobilityByTravelIdAndUser(id,username)
        if (typeof mobility === 'undefined') {
            throw new ForbiddenException('this travel is yours');
        } else {
            return this.travelService.removeTravel(id);
        }
    }
}
