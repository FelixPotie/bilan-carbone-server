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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbHMvVXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FLaUI7QUFHakIsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG9CQUFVO0NBa0JuQyxDQUFBO0FBZkc7SUFEQyxnQ0FBc0IsRUFBRTs7Z0NBQ2I7QUFHWjtJQURDLGdCQUFNLEVBQUU7O3VDQUNVO0FBR25CO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ1M7QUFHbEI7SUFEQyxnQkFBTSxFQUFFOztxQ0FDUTtBQUtqQjtJQUhDLGdCQUFNLENBQUM7UUFDSixJQUFJLEVBQUUsYUFBYTtLQUN0QixDQUFDOzt3Q0FDa0I7QUFqQlgsSUFBSTtJQURoQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdDQUFnQztHQUNwQyxJQUFJLENBa0JoQjtBQWxCWSxvQkFBSSJ9