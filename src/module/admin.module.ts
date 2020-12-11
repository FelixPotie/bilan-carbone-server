import { Module } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../model/admin.entity';
import { AdminController } from '../controller/admin.controller';

@Module({
    providers: [AdminService],
    imports: [TypeOrmModule.forFeature([Admin])],
    controllers: [AdminController],
    exports:[AdminService]
})
export class AdminModule {}