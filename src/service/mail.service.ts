import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    public send(): void {
        this
            .mailerService
            .sendMail({
                to: 'bourratmathis@gmail.com', // List of receivers email address
                from: process.env.EMAIL_ID, // Senders email address
                subject: 'Testing Nest MailerModule ✔', // Subject line
                text: 'welcome', // plaintext body
                html: '<b>welcome</b>', // HTML body content
            })
            .then((success) => {
                console.log(success)
            })
            .catch((err) => {
                console.log(err)
            });
    }
}