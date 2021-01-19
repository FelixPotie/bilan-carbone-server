import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MobilityService } from '../service/mobility.service';
import { MailService } from '../service/mail.service';
import { TravelService } from '../service/travel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mobility } from '../model/mobility.entity';
import { Travel } from '../model/travel.entity';

@Module({
    imports: [EventEmitterModule.forRoot(
        {
            // set this to `true` to use wildcards
            wildcard: false,
            // the delimiter used to segment namespaces
            delimiter: '.',
            // set this to `true` if you want to emit the newListener event
            newListener: false,
            // set this to `true` if you want to emit the removeListener event
            removeListener: false,
            // the maximum amount of listeners that can be assigned to an event
            maxListeners: 10,
            // show event name in memory leak message when more than maximum amount of listeners is assigned
            verboseMemoryLeak: false,
            // disable throwing uncaughtException if an error event is emitted and it has no listeners
            ignoreErrors: false,
        }
    ), 
    TypeOrmModule.forFeature([Mobility]),
    TypeOrmModule.forFeature([Travel])
],
    controllers: [],
    providers: [MailService, MobilityService, TravelService],
})
export class EventModule {}
