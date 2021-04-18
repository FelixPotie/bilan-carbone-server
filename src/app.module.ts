import { EventModule } from './module/event.module';

import {Logger, Module} from '@nestjs/common';
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
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import {format} from "winston";

@Module({
    imports: [
        EventModule,
        AdminModule,
        MobilityModule,
        TravelModule,
        StepModule,
        DatabaseModule,
        MailModule,
        AuthModule,
        AppSettingModule,
        TerminusModule,        // used for the health check
        WinstonModule.forRoot({
            transports: [
                // - Write all logs with level `error` and below to `error.log`
                new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
                // - Write all logs with level `info` and below to `combined.log`
                new winston.transports.File({ filename: 'log/combined.log' }),
                // - Print log in console in nest way
                new winston.transports.Console({
                    format: winston.format.combine(
                        format.timestamp(),
                        nestWinstonModuleUtilities.format.nestLike(),
                    ),
                }),
                // - Used to print error stack trace
                new winston.transports.Console({
                    format: winston.format.combine(
                        format.printf(({ message, stack }) => {
                                if (stack) {
                                    return `${message} - ${stack}`;
                                }
                        }),
                    ),
                    level: 'error'
                }),
            ],
        })
    ],
    providers: [AppService,JwtCustomService,Logger],
    controllers: [AppController, HealthController],
    exports:[JwtCustomService]
})
export class AppModule { }
