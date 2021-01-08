import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum, IsNumber, IsDateString } from 'class-validator';

import { MobilityType } from '../model/mobilityType.entity';

export class MobilityDto {
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    departmentTypeName: string; //Custom validator here to? 

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(MobilityType)
    type: MobilityType;

    @ApiProperty()
    type: string;
    @ApiProperty()
    place: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    year: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    endDate: Date;
}