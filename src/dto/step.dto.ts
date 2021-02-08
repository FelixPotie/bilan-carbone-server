import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TransportType } from '../model/step.entity';

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
    @IsEnum(TransportType)
    meansOfTransport: TransportType;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    carboneEmission: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    latDeparture: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    longDeparture: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    latArrival: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    longArrival: number;
}