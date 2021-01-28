import * as path from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
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
        template:{
            dir: 'src/email-templates/',
            adapter: new PugAdapter(),
            options: {
                strict: true,
            },
        }
    }),
    MobilityModule
  ],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {}