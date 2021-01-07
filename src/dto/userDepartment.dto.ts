import { ApiProperty } from '@nestjs/swagger';

export class UserDepartmentDto {
    @ApiProperty()
    name: string;
}