"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../models/User.model");
class UserService {
    getUsers(callback) {
        User_model_1.User.find(callback);
    }
    createUser(user) {
        user.save();
    }
}
exports.default = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9Vc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUE0QztBQUU1QyxNQUFxQixXQUFXO0lBRXJCLFFBQVEsQ0FBQyxRQUFhO1FBQ3pCLGlCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBVTtRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0NBRUo7QUFWRCw4QkFVQyJ9