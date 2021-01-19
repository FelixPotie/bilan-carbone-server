import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constructor(
        // private eventEmitter: EventEmitter2
        ) {}

    getHello(): string {
        return 'Hello World!';
    }


    // testEvent(): void {
    //     this.eventEmitter.emit(
    //         'travel.added',
    //         new TravelAddedEvent(
    //             {
    //                 mobilityId: 1,
    //                 travelType: 'GO'
    //             }
    //         )
    //     )
    // }

    // @OnEvent('travel.added')
    // handleOrderTestedEvent(event: TravelAddedEvent){
    //     console.log(event.payload.mobilityId)
    //     console.log(event.payload.travelType)
    // }






}
