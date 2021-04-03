import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Headers, UnauthorizedException, ForbiddenException, Logger } from '@nestjs/common';
import { MobilityFilterDTO } from '../dto/filter.dto';
import { Mobility } from '../model/mobility.entity';
import { MobilityDto } from '../dto/mobility.dto';
import { MobilityService } from '../service/mobility.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtCustomService } from '../auth/jwtCustom.service';


@Controller('mobility')
export class MobilityController {
    private readonly logger = new Logger(MobilityController.name);
    
    constructor(private mobilityService: MobilityService,
        private jwtCustomService: JwtCustomService) { }

    @UseGuards(AuthGuard('user'))
    @Get(':id')
    public async getMobility(@Param('id') id: number, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken); 
        const mobility =  await this.mobilityService.getMobility(id);
        if (mobility.userId !== username) {
            this.logger.error('user : '+username+' try to get the mobility '+id+' of '+ mobility.userId);
            throw new ForbiddenException("id do not correspond to you"); 
        } else {
            this.logger.log('user : '+username+' try to get his mobility '+id);
            return mobility
        }
      
    }

    @UseGuards(AuthGuard('user'))
    @Get('/user/:id')
    public async getMobilitiesByUserId(@Param('id') id: string, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        if (username === id){
            this.logger.log('user : '+username+' try to get his mobilities');
            return await this.mobilityService.getMobilitiesByUserId(id);
        } else {
            this.logger.error('user : '+username+' try to get the mobilities of '+ id);
            throw new ForbiddenException("id do not correspond to you");
        }
        
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
            this.logger.error('user : '+username+' try to add a mobility to '+ mobilityDto.userId);
            throw new ForbiddenException("id do not correspond to you"); 
        } else {
            this.logger.log('user : '+username+' try to add a mobility');
            return this.mobilityService.addMobility(mobilityDto);
        }
    }

    @UseGuards(AuthGuard('user'))
    @Put(':id')
    public async updateMobility(@Param('id') id: number, @Body() mobilityDto: MobilityDto, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken);
        const mobilityInUpdate = await this.mobilityService.getMobilityByUser(id, username);
        if (typeof mobilityInUpdate === 'undefined' || mobilityDto.userId !== username) {
            this.logger.error('user : '+username+' try to update the mobility '+id+ ' of '+mobilityDto.userId);
            throw new ForbiddenException("id do not correspond to one of your mobility"); 
        } else {
            this.logger.log('user : '+username+' try to update the mobility '+id);
            return this.mobilityService.updateMobility(id, mobilityDto);
        }
    }

    @UseGuards(AuthGuard('user'))
    @Delete(':id')
    public async removeMobility(@Param('id') id: number, @Headers('authorization') authToken : string) {
        const username = this.jwtCustomService.getUserName(authToken); 
        const mobility =  await this.mobilityService.getMobility(id);
        if (mobility.userId !== username) {
            this.logger.error('user : '+username+' try to delete the mobility '+id+' of '+ mobility.userId);
            throw new ForbiddenException("id do not correspond to you"); 
        } else {
            this.logger.log('user : '+username+' try to delete the mobility '+id);
            return this.mobilityService.removeMobility(id);
        }
    }

    //-------------------------------- Admin ----------------------------------------------------------
    
    @UseGuards(AuthGuard('admin'))
    @Get('/admin/all')
    public async getAllMobilities() {
        this.logger.log('an admin try to collect all the admins');
        return this.mobilityService.getMobilitiesWithTravelsStepsDepartment();
    }

    @UseGuards(AuthGuard('admin'))
    @Post('/export/')
    public async getMobilitiesWithFilter(@Body() filters: MobilityFilterDTO) {
        this.logger.log('an admin try to export the data');
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

}
