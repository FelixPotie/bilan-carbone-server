import { Module } from '@nestjs/common';
import { MobilityService } from '../service/mobility.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobilityController } from '../controller/mobility.controller';
import { Mobility } from '../model/mobility.entity';

@Module({
    providers: [MobilityService],
    imports: [TypeOrmModule.forFeature([Mobility])],
    controllers: [MobilityController],
    exports: [MobilityService]
})
export class MobilityModule {}