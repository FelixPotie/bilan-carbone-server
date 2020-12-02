"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const UserController_1 = require("../controllers/UserController");
class UserRoutes {
    constructor() {
        this.userController = new UserController_1.UserController();
    }
    route(app) {
        app.post('/users', (req, res) => {
            this.userController.createUser(req, res);
        });
        /*
                app.get('/api/users', (req: Request, res: Response) => {
                    this.user_controller.get_user(req, res);
                }); */
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvVXNlclJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrRUFBK0Q7QUFFL0QsTUFBYSxVQUFVO0lBQXZCO1FBRVksbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFhbEUsQ0FBQztJQVhVLEtBQUssQ0FBQyxHQUFnQjtRQUV6QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDWDs7O3NCQUdjO0lBRVYsQ0FBQztDQUNKO0FBZkQsZ0NBZUMifQ==