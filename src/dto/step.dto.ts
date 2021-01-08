import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StepDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    travelId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    rank: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    departure: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    arrival: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    distance: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    means_of_transport: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    carbone_emission: number;
}