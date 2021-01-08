import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { DepartmentStatus } from '../model/departmentType.entity';

export class UserDepartmentDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    status: DepartmentStatus;
}