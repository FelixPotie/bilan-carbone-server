import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelService } from '../service/travel.service';
import { Travel } from '../model/travel.entity';
import { TravelController } from '../controller/travel.controller';

@Module({
    providers: [TravelService],
    imports: [TypeOrmModule.forFeature([Travel])],
    controllers: [TravelController],
})
export class TravelModule {}