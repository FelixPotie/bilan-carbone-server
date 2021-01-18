import * as path from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './../service/mail.service';
import { MailController } from './../controller/mail.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { MobilityModule } from './mobility.module';

@Module({
  providers: [MailService],
  imports: [
    ScheduleModule.forRoot(),
    MailerModule.forRoot({
        transport: {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASS
            }
        },
        defaults: {
            from: '"mathis bourrat" <>',
        },
        // template:{
        //     dir: "./templates",
        //     adapter: new HandlebarsAdapter(),
        //     options: {
        //         strict: true,
        //     },
        // }
    }),
    MobilityModule
  ],
  controllers: [MailController],
  // exports: [MailService]
})
export class MailModule {}