"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const db_1 = require("../modules/db");
// second tutorial
const CommonRoutes_1 = require("../routes/CommonRoutes");
const UserRoutes_1 = require("../routes/UserRoutes");
const User_model_1 = require("../modules/models/User.model");
class App {
    constructor() {
        this.commonsRoutes = new CommonRoutes_1.CommonRoutes();
        this.userRoutes = new UserRoutes_1.UserRoutes();
        this.app = express_1.default();
        this.config();
        db_1.connect();
        this.app.post('/movies', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = new User_model_1.User();
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.courses = req.body.courses;
            user.schoolYear = req.body.school_year;
            console.log(this.app.toString());
            yield user.save();
            res.send(user);
        }));
        this.userRoutes.route(this.app);
        this.commonsRoutes.route(this.app); //should always be the last route
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json({
            limit: '50mb',
            verify(req, res, buf, encoding) {
                req.rawBody = buf;
            }
        }));
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHdEQUEwQztBQUMxQyxzQ0FBc0M7QUFFdEMsa0JBQWtCO0FBQ2xCLHlEQUFzRDtBQUN0RCxxREFBa0Q7QUFDbEQsNkRBQW9EO0FBR3BELE1BQU0sR0FBRztJQU1MO1FBSFEsa0JBQWEsR0FBaUIsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDakQsZUFBVSxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLFlBQU8sRUFBRSxDQUFDO1FBRVYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQU8sR0FBRyxFQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDaEMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBR0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztJQUV4RSxDQUFDO0lBR08sTUFBTTtRQUNWLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxDQUFDLEdBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVE7Z0JBQy9CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLENBQUM7U0FDSixDQUFDLENBQUMsQ0FBQztRQUNKLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFDRCxrQkFBZSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyJ9