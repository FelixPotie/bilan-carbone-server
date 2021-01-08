import { ApiProperty } from '@nestjs/swagger';
import { MobilityType } from '../model/mobilityType.entity';

export class MobilityDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    user_department: string;
    @ApiProperty()
    type: MobilityType;
    @ApiProperty()
    place: string;
    @ApiProperty()
    year: number;
    @ApiProperty()
    start_date: Date;
    @ApiProperty()
    end_date: Date;
}