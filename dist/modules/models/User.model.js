"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "courses", void 0);
__decorate([
    typeorm_1.Column({
        name: "school_year"
    }),
    __metadata("design:type", Number)
], User.prototype, "schoolYear", void 0);
User = __decorate([
    typeorm_1.Entity('users') // runtime erreur if mismatch db
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL21vZGVscy9Vc2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUtpQjtBQUdqQixJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsb0JBQVU7Q0FrQm5DLENBQUE7QUFmRztJQURDLGdDQUFzQixFQUFFOztnQ0FDYjtBQUdaO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ1U7QUFHbkI7SUFEQyxnQkFBTSxFQUFFOztzQ0FDUztBQUdsQjtJQURDLGdCQUFNLEVBQUU7O3FDQUNRO0FBS2pCO0lBSEMsZ0JBQU0sQ0FBQztRQUNKLElBQUksRUFBRSxhQUFhO0tBQ3RCLENBQUM7O3dDQUNrQjtBQWpCWCxJQUFJO0lBRGhCLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZ0NBQWdDO0dBQ3BDLElBQUksQ0FrQmhCO0FBbEJZLG9CQUFJIn0=