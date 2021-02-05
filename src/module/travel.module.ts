import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelService } from '../service/travel.service';
import { Travel } from '../model/travel.entity';
import { TravelController } from '../controller/travel.controller';
import { MobilityService } from '../service/mobility.service';
import { Mobility } from '../model/mobility.entity';
import { JwtCustomService } from '../auth/jwtCustom.service';

@Module({
    providers: [TravelService, MobilityService, JwtCustomService],
    imports: [TypeOrmModule.forFeature([Travel]), TypeOrmModule.forFeature([Mobility])],
    controllers: [TravelController],
})
export class TravelModule {}