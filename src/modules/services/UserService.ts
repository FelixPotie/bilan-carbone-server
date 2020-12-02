
import { User } from '../models/User.model';

export default class UserService {
    
    public getUsers(callback: any){
        User.find(callback);
    }

    public createUser(user: User) {
        user.save()
    }

}