import {Controller, Get} from '@nestjs/common';
import { MailService } from './../service/mail.service';

@Controller('mail')
export class MailController{
    constructor(private mailService: MailService){}

    @Get()
    public sendMail() {
        return this.mailService.send()
    }
}