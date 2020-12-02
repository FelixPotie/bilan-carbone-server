import { Request, Response } from 'express';
import e = require('express');
import { insufficientParameters, postgresError, successResponse, failureResponse } from '../modules/services/CommonService';
import UserService from '../modules/services/UserService';
import {User} from "../modules/models/User.model";


export class UserController {

    private userService: UserService = new UserService();


    public createUser(req: Request, res: Response) {
        
        const user = new User();
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.courses = req.body.courses;
        user.schoolYear = req.body.school_year;

        this.userService.createUser(user);
        
        /*this.userService.createUser(user, (err: any) => {
            if (err) {
                postgresError(err,res)
            } else {
                successResponse('create user successfull', res);
            }
        }); */
    }
}