import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StepService } from '../service/step.service';
import { Step } from '../model/step.entity';
import { StepController } from '../controller/step.controller';
import { JwtCustomService } from '../auth/jwtCustom.service';
import { TravelService } from '../service/travel.service';
import { Travel } from '../model/travel.entity';
import { MobilityService } from '../service/mobility.service';
import { Mobility } from '../model/mobility.entity';

@Module({
    providers: [StepService,TravelService,MobilityService,JwtCustomService],
    imports: [TypeOrmModule.forFeature([Step]), TypeOrmModule.forFeature([Travel]), TypeOrmModule.forFeature([Mobility])],
    controllers: [StepController],
})
export class StepModule {}