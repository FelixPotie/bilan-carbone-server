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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYwNjg0NjgzOTU3Mi1DcmVhdGVVc2VyVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvbWlncmF0aW9ucy8xNjA2ODQ2ODM5NTcyLUNyZWF0ZVVzZXJUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0Q7QUFFL0QsTUFBYSw0QkFBNEI7SUFFeEIsRUFBRSxDQUFDLFdBQXdCOztZQUNwQyxPQUFPLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQUssQ0FBQztnQkFDM0MsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNMO3dCQUNJLElBQUksRUFBRSxJQUFJO3dCQUNWLElBQUksRUFBRSxTQUFTO3dCQUNmLFNBQVMsRUFBRSxJQUFJO3dCQUNmLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixrQkFBa0IsRUFBRSxXQUFXO3FCQUNsQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsV0FBVzt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLEtBQUs7cUJBQ3BCO29CQUNEO3dCQUNJLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsS0FBSztxQkFDcEI7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLEtBQUs7cUJBQ3BCO29CQUNEO3dCQUNJLElBQUksRUFBRSxhQUFhO3dCQUNuQixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsS0FBSztxQkFDcEI7aUJBQ0o7YUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxJQUFJLENBQUMsV0FBd0I7O1lBQ3RDLE9BQU8sTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUVKO0FBekNELG9FQXlDQyJ9