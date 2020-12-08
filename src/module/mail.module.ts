import * as path from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './../service/mail.service';
import { MailController } from './../controller/mail.controller';

@Module({
  providers: [MailService],
  imports: [
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
            dir: "./templates",
            adapter: new HandlebarsAdapter(),
            options: {
                strict: true,
            },
        }
    }),
  ],
  controllers: [MailController],
})
export class MailModule {}