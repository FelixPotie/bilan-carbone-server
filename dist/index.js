"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const environments_1 = __importDefault(require("./environments"));
const PORT = environments_1.default.getPort();
/*
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
 });
*/
const server = app_1.default.listen(5000, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server listening on:', 'http://' + address + ':' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBOEI7QUFDOUIsa0VBQWdDO0FBR2hDLE1BQU0sSUFBSSxHQUFHLHNCQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFM0I7Ozs7RUFJRTtBQUVGLE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFFNUMsTUFBTSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFpQixDQUFDO0lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsU0FBUyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkUsQ0FBQyxDQUFDLENBQUMifQ==