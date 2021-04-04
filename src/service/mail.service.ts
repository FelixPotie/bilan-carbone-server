import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'
import { Cron, CronExpression } from '@nestjs/schedule';
import { MobilityService } from './mobility.service';
import { OnEvent } from '@nestjs/event-emitter';
import { TravelAddedEvent } from './travel.service';

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
                    template: 'startEmail'
                })
                .then((success) => {
                    this.logger.log('sendStartEmail : Mail sent to '+email);
                    this.logger.log(success)
                })
                .catch((err) => {
                    this.logger.error('sendStartEmail : Mail failed to send to '+email);
                    this.logger.error(err)
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
                    template: 'endEmail'
                })
                .then((success) => {
                    this.logger.log('sendEndEmail : Mail sent to '+email);
                    this.logger.log(success)
                })
                .catch((err) => {
                    this.logger.error('sendEndEmail : Mail failed to send to '+email);
                    this.logger.error(err)
                });
    }

    public async sendConfirmationEmail(email: string, type: string) {
        let subject: string
        if (type === "GO") subject = "Confirmation d'enregistrement de votre trajet aller"
        else if (type === "BACK") subject = "Confirmation d'enregistrement de votre trajet retour"
        else subject = "confirmation de votre trajet"
        this
            .mailerService
            .sendMail({
                to: email, // List of receivers email address
                from: process.env.EMAIL_ID, // Senders email address
                subject: subject, // Subject line
                template: 'confirmationEmail'
            })
            .then((success) => {
                this.logger.log('sendConfirmationEmail : Mail sent to '+email);
                this.logger.log(success)
            })
            .catch((err) => {
                this.logger.error('sendConfirmationEmail : Mail failed to send to '+email);
                this.logger.error(err)
            });
    }

    @OnEvent('travel')
    async handleTravelAddedEvent(event: TravelAddedEvent) {
        let mobility = await this.mobilityService.getMobility(event.payload.mobilityId)
        if (mobility) {
            this.logger.log("handleTravelAddedEvent : event: "+ event.payload.mobilityId + event.payload.travelType)
            this.sendConfirmationEmail(mobility.userId + "@etu.umontpellier.fr", event.payload.travelType)
        }
    }

    // @Cron(CronExpression.EVERY_WEEK)
    async verifDate(): Promise<any> {
        this.logger.log(('verifDate : mail verif date mobility'))
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