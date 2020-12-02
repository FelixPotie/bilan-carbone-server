"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1606846839572 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1606846839572 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryRunner.createTable(new typeorm_1.Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "firstname",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "courses",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "school_year",
                        type: "integer",
                        isNullable: false
                    }
                ]
            }), true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryRunner.dropTable("users");
        });
    }
}
exports.CreateUserTable1606846839572 = CreateUserTable1606846839572;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYwNjg0NjgzOTU3Mi1DcmVhdGVVc2VyVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9taWdyYXRpb25zLzE2MDY4NDY4Mzk1NzItQ3JlYXRlVXNlclRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUErRDtBQUUvRCxNQUFhLDRCQUE0QjtJQUV4QixFQUFFLENBQUMsV0FBd0I7O1lBQ3BDLE9BQU8sTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksZUFBSyxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ0w7d0JBQ0ksSUFBSSxFQUFFLElBQUk7d0JBQ1YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLElBQUk7d0JBQ2YsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLGtCQUFrQixFQUFFLFdBQVc7cUJBQ2xDO29CQUNEO3dCQUNJLElBQUksRUFBRSxXQUFXO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsS0FBSztxQkFDcEI7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxLQUFLO3FCQUNwQjtvQkFDRDt3QkFDSSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsS0FBSztxQkFDcEI7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLGFBQWE7d0JBQ25CLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxLQUFLO3FCQUNwQjtpQkFDSjthQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVZLElBQUksQ0FBQyxXQUF3Qjs7WUFDdEMsT0FBTyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0NBRUo7QUF6Q0Qsb0VBeUNDIn0=