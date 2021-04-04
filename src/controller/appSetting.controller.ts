import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from "@nestjs/common";
import { MobilityService } from "../service/mobility.service";
import { UserDepartmentDto } from "../dto/userDepartment.dto";
import { UserDepartmentService } from "../service/userDepartment.service";
import { MobilityType } from "../model/mobilityType.entity";
import { AuthGuard } from "@nestjs/passport";

@Controller('app/setting')
export class AppSettingController {
    private readonly logger = new Logger(AppSettingController.name);
    constructor(
        private readonly userDepartmentService: UserDepartmentService,
        private readonly mobilityService: MobilityService,
    ) {}

    @Get()
    public async get() {
        const mobilityType = Object.values(MobilityType);
        const departments = await this.userDepartmentService.getUserDepartments();
        const mobility = await this.mobilityService.getMobilities();
        const allYear =  mobility? mobility.map(mobility => {
                return mobility.startDate.getFullYear()
            }) : [];
        const distinctYear = [...new Set(allYear)];
        const result = {
            department : departments, 
            allYear : distinctYear,
            mobilityType: mobilityType
        }
        return result;
    }

    @UseGuards(AuthGuard('admin'))
    @Post()
    public async addUserDepartment(@Body() userDepartmentDto: UserDepartmentDto) {
        this.logger.log('addUserDepartment : an admin try to add department '+userDepartmentDto.name);
        return this.userDepartmentService.addUserDepartment(userDepartmentDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Put(':id')
    public async updateMobility(@Param('id') id: string, @Body() userDepartmentDto: UserDepartmentDto) {
        this.logger.log('updateMobility : an admin try to update department '+userDepartmentDto.name);
        return this.userDepartmentService.updateUserDepartment(id, userDepartmentDto);
    }

    @UseGuards(AuthGuard('admin'))
    @Delete(':id')
    public async removeMobility(@Param('id') id: string) {
        this.logger.log('removeMobility : an admin try to delete department '+id);
        return this.userDepartmentService.removeUserDepartment(id);
    }

}
