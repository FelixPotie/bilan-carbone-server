import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { UsersController } from '../controller/users.controller';

@Module({
    providers: [UsersService],
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
})
export class UsersModule {}