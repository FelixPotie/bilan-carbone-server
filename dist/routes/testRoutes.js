"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    route(app) {
        app.get('/api/test', (req, res) => {
            res.status(200).json({ message: "Get request successfull" });
        });
        app.post('/api/test', (req, res) => {
            res.status(200).json({ message: "Post request successfull" });
        });
    }
}
exports.TestRoutes = TestRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdGVzdFJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLFVBQVU7SUFFYixLQUFLLENBQUMsR0FBZ0I7UUFFMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNIO0FBWkQsZ0NBWUMifQ==