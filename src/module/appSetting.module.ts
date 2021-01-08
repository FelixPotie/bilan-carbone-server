import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDepartmentService } from '../service/userDepartment.service';
import { DepartmentType } from '../model/departmentType.entity';
import { AppSettingController } from '../controller/appSetting.controller';
import { MobilityService } from '../service/mobility.service';
import { Mobility } from '../model/mobility.entity';

@Module({
    providers: [UserDepartmentService, MobilityService],
    imports: [TypeOrmModule.forFeature([DepartmentType]), TypeOrmModule.forFeature([Mobility])],
    controllers: [AppSettingController],
})
export class AppSettingModule {}
