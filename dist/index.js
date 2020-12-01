"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(5000, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server listening on:', 'http://' + address + ':' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBeUI7QUFHekIsTUFBTSxNQUFNLEdBQUcsU0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQWlCLENBQUM7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyJ9