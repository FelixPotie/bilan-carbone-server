import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Headers, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { MobilityFilterDTO } from '../dto/filter.dto';
import { Mobility } from '../model/mobility.entity';
import { MobilityDto } from '../dto/mobility.dto';
import { MobilityService } from '../service/mobility.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtCustomService } from '../auth/jwtCustom.service';


@Controller('mobility')
export class MobilityController {
    constructor(private mobilityService: MobilityService,
        private jwtCustomService: JwtCustomService) { }

    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getMobility(@Param('id') id: number, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken); 
        const mobility =  await this.mobilityService.getMobility(id);
        if (mobility.userId !== username) {
            throw new ForbiddenException("id do not correspond to your"); 
        } else {
            return mobility
        }
      
    }

    @UseGuards(AuthGuard('user'))
    @Get('/user/:id')
    public async getMobilitiesByUserId(@Param('id') id: string, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        if (username === id){
            return await this.mobilityService.getMobilitiesByUserId(id);
        } else {
            throw new ForbiddenException("id do not correspond to your");
        }
        
    }

    @UseGuards(AuthGuard('admin'))
    @Get('/admin/all')
    public async getAllMobilities() {
        return this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
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
        this.mobilityService.getMobilitiesWithOutUserId().then(result => console.log(result));
        return this.mobilityService.getMobilitiesWithOutUserId();
    }

    @UseGuards(AuthGuard('user'))
    @Post()
    public async addMobility(@Body() mobilityDto: MobilityDto, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken); 
        if (mobilityDto.userId !== username) {
            throw new ForbiddenException("id do not correspond to your"); 
        } else {
            return this.mobilityService.addMobility(mobilityDto);
        }
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateMobility(@Param('id') id: number, @Body() mobilityDto: MobilityDto, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        const mobilityInUpdate = await this.mobilityService.getMobilityByUser(id, username);
        if (typeof mobilityInUpdate === 'undefined' || mobilityDto.userId !== username) {
            throw new ForbiddenException("id do not correspond to one of your mobility"); 
        } else {
            return this.mobilityService.updateMobility(id, mobilityDto);
        }
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeMobility(@Param('id') id: number, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken); 
        const mobility =  await this.mobilityService.getMobility(id);
        if (mobility.userId !== username) {
            throw new ForbiddenException("id do not correspond to your"); 
        } else {
            return this.mobilityService.removeMobility(id);
        }
    }

}
