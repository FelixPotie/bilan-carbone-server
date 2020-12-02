"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = __importDefault(require("../modules/services/UserService"));
const User_model_1 = require("../modules/models/User.model");
class UserController {
    constructor() {
        this.userService = new UserService_1.default();
    }
    createUser(req, res) {
        const user = new User_model_1.User();
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
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0Esa0ZBQTBEO0FBQzFELDZEQUFrRDtBQUdsRCxNQUFhLGNBQWM7SUFBM0I7UUFFWSxnQkFBVyxHQUFnQixJQUFJLHFCQUFXLEVBQUUsQ0FBQztJQXFCekQsQ0FBQztJQWxCVSxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFFekMsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQzs7Ozs7O2NBTU07SUFDVixDQUFDO0NBQ0o7QUF2QkQsd0NBdUJDIn0=