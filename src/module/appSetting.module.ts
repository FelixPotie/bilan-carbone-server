import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDepartmentService } from '../service/userDepartment.service';
import { UserDepartment } from '../model/userDepartment.entity';
import { AppSettingController } from '../controller/appSetting.controller';
import { MobilityService } from '../service/mobility.service';
import { Mobility } from '../model/mobility.entity';

@Module({
    providers: [UserDepartmentService, MobilityService],
    imports: [TypeOrmModule.forFeature([UserDepartment]), TypeOrmModule.forFeature([Mobility])],
    controllers: [AppSettingController],
})
export class AppSettingModule {}
