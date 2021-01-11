import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MobilityService } from "../service/mobility.service";
import { UserDepartmentDto } from "../dto/userDepartment.dto";
import { UserDepartmentService } from "../service/userDepartment.service";
import { MobilityType } from "../model/mobilityType.entity";

@Controller('app/setting')
export class AppSettingController {

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

    @Post()
    public async addUserDepartment(@Body() userDepartmentDto: UserDepartmentDto) {
        return this.userDepartmentService.addUserDepartment(userDepartmentDto);
    }

    @Put(':id')
    public async updateMobility(@Param('id') id: string, @Body() userDepartmentDto: UserDepartmentDto) {
        return this.userDepartmentService.updateUserDepartment(id, userDepartmentDto);
    }

    @Delete(':id')
    public async removeMobility(@Param('id') id: string) {
        return this.userDepartmentService.removeUserDepartment(id);
    }


}
