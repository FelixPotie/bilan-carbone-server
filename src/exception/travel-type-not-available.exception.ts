
export class TravelTypeNotAvailableException extends Error {
    constructor() {
      super('travel type not available for this mobility');
    }
}