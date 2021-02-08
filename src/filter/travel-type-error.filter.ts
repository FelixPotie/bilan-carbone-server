import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus} from '@nestjs/common';
import { Request, Response } from 'express';
import { TravelTypeNotAvailableException } from '../exception/travel-type-not-available.exception';

@Catch(TravelTypeNotAvailableException)
export class TravelTypeNotAvailableErrorFilter implements ExceptionFilter {
  catch(exception: TravelTypeNotAvailableException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = HttpStatus.FORBIDDEN;

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        detail: exception.message
      });
  }
}