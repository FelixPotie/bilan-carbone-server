import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersModule } from './module/users.module';
import { DatabaseModule } from './module/database.module';

@Module({
    imports: [UsersModule, DatabaseModule],
    providers: [AppService],
    controllers: [AppController],
})
export class AppModule { }
