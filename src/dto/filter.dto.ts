import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsArray, IsNumber } from 'class-validator';
import { MobilityType } from '../model/mobilityType.entity';
import { DepartmentType } from '../model/departmentType.entity';
import { DepartmentStatus } from '../model/departmentType.entity';

export class MobilityFilterDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString({each:true})
    derpartment_type_name: string[]; //create custom validator ? 

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(DepartmentStatus,{each:true})
    department_status: DepartmentStatus[];

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber({},{each:true})
    school_year: number[];

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber({},{each:true})
    start_year: number[];
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(MobilityType,{each:true})
    mobility_type: MobilityType[];
}