import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersModule } from './module/users.module';
import { DatabaseModule } from './module/database.module';
import { MailModule } from './module/mail.module';
import { MobilityModule } from './module/mobility.module';
import { TravelModule } from './module/travel.module';
import { StepModule } from './module/step.module';

@Module({
    imports: [UsersModule, MobilityModule, TravelModule, StepModule, DatabaseModule, MailModule],
    providers: [AppService],
    controllers: [AppController],
})
export class AppModule { }
