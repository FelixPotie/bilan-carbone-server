import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { TravelType } from '../model/travel.entity'
export class TravelDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    mobilityId: number;

    @IsNotEmpty()
    @ApiProperty()
    @IsDateString()
    date: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TravelType)
    type: TravelType;
    
}