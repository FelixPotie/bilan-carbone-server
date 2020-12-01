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
exports.connect = void 0;
const typeorm_1 = require("typeorm");
let connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield typeorm_1.createConnection({
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "bilan-carbone-db",
        "synchronize": false,
        "logging": true,
        "migrationsTableName": "custom_migration_table",
        "entities": [
            __dirname + '/models/*.js'
        ],
        "migrations": [
            __dirname + '/migrations/*.js'
        ],
        "cli": {
            entitiesDir: __dirname + "/models/",
            migrationsDir: __dirname + '/migrations/'
        }
    });
});
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXlDO0FBQ2xDLElBQUksT0FBTyxHQUFHLEdBQVMsRUFBRTtJQUM1QixNQUFNLFVBQVUsR0FBRyxNQUFNLDBCQUFnQixDQUFDO1FBQ3RDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFDLFVBQVU7UUFDckIsVUFBVSxFQUFDLFVBQVU7UUFDckIsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QixhQUFhLEVBQUUsS0FBSztRQUNwQixTQUFTLEVBQUUsSUFBSTtRQUNmLHFCQUFxQixFQUFFLHdCQUF3QjtRQUMvQyxVQUFVLEVBQUU7WUFDUixTQUFTLEdBQUcsY0FBYztTQUM3QjtRQUNELFlBQVksRUFBRTtZQUNWLFNBQVMsR0FBRyxrQkFBa0I7U0FDakM7UUFDRCxLQUFLLEVBQUU7WUFDSCxXQUFXLEVBQUUsU0FBUyxHQUFHLFVBQVU7WUFDbkMsYUFBYSxFQUFFLFNBQVMsR0FBRyxjQUFjO1NBQzVDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUM7QUF2QlMsUUFBQSxPQUFPLFdBdUJoQiJ9