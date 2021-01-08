import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsNumber, IsDateString } from 'class-validator';

import { MobilityType } from '../model/mobilityType.entity';

import { MobilityType } from '../model/mobilityType.entity';

export class MobilityDto {
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_department_name: string; //Custom validator here to? 

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(MobilityType)
    type: MobilityType;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    place: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    year: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    start_date: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    end_date: Date;
}