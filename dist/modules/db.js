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
            __dirname + '/models/User.model.js'
        ],
        "migrations": [
            __dirname + '/migrations/*.js'
        ],
        "cli": {
            entitiesDir: __dirname + "/models/",
            migrationsDir: __dirname + '/migrations/'
        }
    });
    console.log(__dirname);
    console.log(connection.entityMetadatas);
});
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBeUM7QUFFbEMsSUFBSSxPQUFPLEdBQUcsR0FBUyxFQUFFO0lBRTVCLE1BQU0sVUFBVSxHQUFHLE1BQU0sMEJBQWdCLENBQUM7UUFDdEMsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUMsVUFBVTtRQUNyQixVQUFVLEVBQUMsVUFBVTtRQUNyQixVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFNBQVMsRUFBRSxJQUFJO1FBQ2YscUJBQXFCLEVBQUUsd0JBQXdCO1FBQy9DLFVBQVUsRUFBRTtZQUNSLFNBQVMsR0FBRyx1QkFBdUI7U0FDdEM7UUFDRCxZQUFZLEVBQUU7WUFDVixTQUFTLEdBQUcsa0JBQWtCO1NBQ2pDO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsV0FBVyxFQUFFLFNBQVMsR0FBRyxVQUFVO1lBQ25DLGFBQWEsRUFBRSxTQUFTLEdBQUcsY0FBYztTQUM1QztLQUNKLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFNUMsQ0FBQyxDQUFBLENBQUM7QUEzQlMsUUFBQSxPQUFPLFdBMkJoQiJ9