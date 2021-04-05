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
                    template: 'startEmail',
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
                    template: 'endEmail',
                    context:{

                    }
                })
                .then((success) => {
                    console.log(success)
                })
                .catch((err) => {
                    console.log(err)
                });
    }

    public async sendConfirmationEmail(userId: string, type: string, place: string) {
        let subject, travelType, template: string
        if (type === "GO") {
            subject = "Confirmation d'enregistrement trajet aller "
            travelType = "aller"
            template = "confirmationEmailGo"
        }
        else if 
        (type === "BACK") {
            subject = "Confirmation d'enregistrement de votre trajet retour"
            travelType = "retour"
            template = "confirmationEmailBack"
        }
        else {
            subject = "confirmation de votre trajet"
            travelType = ""
            template = "confirmationEmailGo"
        }
        this
            .mailerService
            .sendMail({
                to: `${userId}@etu.umontpellier.fr`, // List of receivers email address
                from: process.env.EMAIL_ID, // Senders email address
                subject: subject, // Subject line
                template: template,
                context: {
                    travelType: travelType,
                    firstName: userId.split(".")[0],
                    lastName: userId.split(".")[1],
                    place: place
                }
            })
            .then((success) => {
                console.log(success)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    @OnEvent('travel')
    async handleTravelAddedEvent(event: TravelAddedEvent) {
        let mobility = await this.mobilityService.getMobility(event.payload.mobilityId)
        if (mobility) {
            console.log("event: ", event.payload.mobilityId, event.payload.travelType)
            this.sendConfirmationEmail(mobility.userId, event.payload.travelType, mobility.place)
        }
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


    // public async testEmail(){
    //     this
    //         .mailerService
    //         .sendMail({
    //             to: "mathis25360@gmail.com", // List of receivers email address
    //             from: process.env.EMAIL_ID, // Senders email address
    //             subject: "test template", // Subject line
    //             template: 'confirmationEmail',
    //             context: {
    //                 username: 'mathis'
    //             }
    //         })
    //         .then((success) => {
    //             console.log(success)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }
}