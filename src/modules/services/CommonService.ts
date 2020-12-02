import { Response } from 'express';
import { response_status_codes } from '../models/Common.model';

export function successResponse(message: string, res: Response) {
    res.status(response_status_codes.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
    });
}

export function failureResponse(message: string, res: Response) {
    res.status(response_status_codes.success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
    });
}

export function insufficientParameters(res: Response) {
    res.status(response_status_codes.bad_request).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}

export function postgresError(err: any, res: Response) {
    res.status(response_status_codes.internal_server_error).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Postgres error',
        DATA: err
    });
}
