import { ApiProperty } from '@nestjs/swagger';

export class AdminDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}