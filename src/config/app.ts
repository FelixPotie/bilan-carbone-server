import express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from "../modules/db";

// second tutorial
import { CommonRoutes } from '../routes/CommonRoutes';
import { UserRoutes } from '../routes/UserRoutes';
import { User } from '../modules/models/User.model';


class App {

    public app: express.Application;
    private commonsRoutes: CommonRoutes = new CommonRoutes();
    private userRoutes: UserRoutes = new UserRoutes();

    constructor() {
       this.app = express();
       this.config();
       connect();
       this.userRoutes.route(this.app);
       this.commonsRoutes.route(this.app); //should always be the last route
       
    }


    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json({
            limit: '50mb',
            verify(req: any, res, buf, encoding) {
                req.rawBody = buf;
            }
        }));
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
export default new App().app;