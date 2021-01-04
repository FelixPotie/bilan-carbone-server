import { ApiProperty } from '@nestjs/swagger';

export class TravelDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    mobilityId: number;
    @ApiProperty()
    date: Date;
    @ApiProperty()
    type: string;
    
    
    // departure: string;
    // arrival: string;
    // distance: number;
    // means_of_transport: string;
    // carbone_emission: number;
}