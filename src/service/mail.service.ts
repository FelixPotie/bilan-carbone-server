import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'
import { Cron, CronExpression } from '@nestjs/schedule';
import { MobilityService } from './mobility.service';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService,
        private readonly mobilityService: MobilityService) { }
    private readonly logger = new Logger(MailService.name);

    public async sendStartEmail(email: string[]): Promise<void> {
        if (email.length > 0)
            this
                .mailerService
                .sendMail({
                    to: email, // List of receivers email address
                    from: process.env.EMAIL_ID, // Senders email address
                    subject: 'Polytech RI: Début de mobilité', // Subject line
                    text: 'Bonjour, vous allez ou venez de commencer votre mobilité à l\'international. Merci de bien vouloir completer...', // plaintext body
                    html: `<h3>Votre mobilité à l'international touche à sa fin</h3>
                <p>Dans le cadre de notre politique DDRS, merci de renseigner ( si ce n'est pas encore le cas) vos trajet 
                sur la plateforme <b>BilanCarbonePopo</b></p>`, // HTML body content
                })
                .then((success) => {
                    console.log(success)
                })
                .catch((err) => {
                    console.log(err)
                });
    }

    public async sendEndEmail(email: string[]): Promise<void> {
        if (email.length > 0)
            this
                .mailerService
                .sendMail({
                    to: email, // List of receivers email address
                    from: process.env.EMAIL_ID, // Senders email address
                    subject: 'Polytech RI: fin de mobilité', // Subject line
                    text: 'Bonjour, votre mobilité à l\'international se termine. Merci de bien vouloir completer...', // plaintext body
                    html: `<h3>Votre mobilité à l'international touche à sa fin</h3>
                <p>Dans le cadre de notre politique DDRS, merci de renseigner ( si ce n'est pas encore le cas) vos trajet 
                sur la plateforme <b>BilanCarbonePopo</b></p>`, // HTML body content
                })
                .then((success) => {
                    console.log(success)
                })
                .catch((err) => {
                    console.log(err)
                });
    }

    // @Cron(CronExpression.EVERY_WEEK)
    async verifDate(): Promise<any> {
        this.logger.log(('mail verif date mobility'))
        let mobilities = await this.mobilityService.getMobilities()
        let today = new Date()
        let nextWeek = new Date()
        nextWeek.setDate(nextWeek.getDate() + 7)
        let startEmails: string[] = []
        let endEmails: string[] = []
        mobilities.forEach(async mobility => {
            let startDate = mobility.startDate
            let endDate = mobility.endDate
            if (today < startDate && startDate < nextWeek) {
                startEmails.push(mobility.userId + "@etu.umontpellier.fr")
            }
            else if (today < endDate && endDate < nextWeek) {
                endEmails.push(mobility.userId + "@etu.umontpellier.fr")
            }
        })
        await this.sendStartEmail(startEmails)
        await this.sendEndEmail(endEmails)
    }
}