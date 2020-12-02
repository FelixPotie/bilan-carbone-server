import { Application, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

export class UserRoutes {

    private userController: UserController = new UserController();

    public route(app: Application) {
        
        app.post('/users', (req: Request, res: Response) => {
            this.userController.createUser(req, res);
        });
/*
        app.get('/api/users', (req: Request, res: Response) => {
            this.user_controller.get_user(req, res);
        }); */

    }
}