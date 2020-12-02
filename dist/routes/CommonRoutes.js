"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    route(app) {
        // Mismatch URL
        app.all('*', function (req, res) {
            res.status(404).send({ error: true, message: 'Check your URL please' });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9Db21tb25Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxZQUFZO0lBRWYsS0FBSyxDQUFDLEdBQWdCO1FBQzFCLGVBQWU7UUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQVksRUFBRSxHQUFhO1lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNIO0FBUkQsb0NBUUMifQ==