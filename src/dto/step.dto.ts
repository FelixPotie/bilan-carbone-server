import { ApiProperty } from '@nestjs/swagger';

export class StepDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    travelId: number;
    @ApiProperty()
    rank: number;
    @ApiProperty()
    departure: string;
    @ApiProperty()
    arrival: string;
    @ApiProperty()
    distance: number;
    @ApiProperty()
    means_of_transport: string;
    @ApiProperty()
    carbone_emission: number;
}