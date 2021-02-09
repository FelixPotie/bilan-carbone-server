import { EventModule } from './module/event.module';

import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { AdminModule } from './module/admin.module';
import { DatabaseModule } from './module/database.module';
import { MailModule } from './module/mail.module';
import { MobilityModule } from './module/mobility.module';
import { TravelModule } from './module/travel.module';
import { StepModule } from './module/step.module';
import { AuthModule } from './module/auth.module';
import { AppSettingModule } from './module/appSetting.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './controller/health.controller';
import { JwtCustomService } from './auth/jwtCustom.service';

@Module({
    imports: [
        EventModule, AdminModule, MobilityModule, TravelModule, StepModule, DatabaseModule, MailModule, AuthModule, AppSettingModule, TerminusModule,
    ],
    providers: [AppService,JwtCustomService],
    controllers: [AppController, HealthController],
    exports:[JwtCustomService]
})
export class AppModule { }
