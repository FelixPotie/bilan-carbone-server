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
        "database": "bilan_carbone_db",
        "synchronize": false,
        "logging": true,
        "migrationsTableName": "custom_migration_table",
        "entities": [
            __dirname + '../modules/models/*.js'
        ],
        "migrations": [
            __dirname + '../modules/migrations/*.js'
        ],
        "cli": {
            entitiesDir: __dirname + "../modules/models/",
            migrationsDir: __dirname + '../modules/migrations/'
        }
    });
});
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF5QztBQUVsQyxJQUFJLE9BQU8sR0FBRyxHQUFTLEVBQUU7SUFFNUIsTUFBTSxVQUFVLEdBQUcsTUFBTSwwQkFBZ0IsQ0FBQztRQUN0QyxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBQyxVQUFVO1FBQ3JCLFVBQVUsRUFBQyxVQUFVO1FBQ3JCLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUyxFQUFFLElBQUk7UUFDZixxQkFBcUIsRUFBRSx3QkFBd0I7UUFDL0MsVUFBVSxFQUFFO1lBQ1IsU0FBUyxHQUFHLHdCQUF3QjtTQUN2QztRQUNELFlBQVksRUFBRTtZQUNWLFNBQVMsR0FBRyw0QkFBNEI7U0FDM0M7UUFDRCxLQUFLLEVBQUU7WUFDSCxXQUFXLEVBQUUsU0FBUyxHQUFHLG9CQUFvQjtZQUM3QyxhQUFhLEVBQUUsU0FBUyxHQUFHLHdCQUF3QjtTQUN0RDtLQUNKLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDO0FBekJTLFFBQUEsT0FBTyxXQXlCaEIifQ==