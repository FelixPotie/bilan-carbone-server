import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsArray, IsNumber, IsDateString } from 'class-validator';
import { MobilityType } from '../model/mobilityType.entity';
import { DepartmentType } from '../model/departmentType.entity';
import { DepartmentStatus } from '../model/departmentType.entity';
import { Expose } from 'class-transformer';

export class MobilityFilterDTO {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString({each:true})
    derpartmentTypeName: string[]; //create custom validator ? 

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(DepartmentStatus,{each:true})
    departmentStatus: DepartmentStatus[];

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber({},{each:true})
    schoolYear: number[];

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    endDate: Date;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(MobilityType,{each:true})
    mobilityType: MobilityType[];
}