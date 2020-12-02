"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const Common_model_1 = require("../models/Common.model");
function successResponse(message, res) {
    res.status(Common_model_1.response_status_codes.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
    });
}
exports.successResponse = successResponse;
function failureResponse(message, res) {
    res.status(Common_model_1.response_status_codes.success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(Common_model_1.response_status_codes.bad_request).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}
exports.insufficientParameters = insufficientParameters;
function postgresError(err, res) {
    res.status(Common_model_1.response_status_codes.internal_server_error).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Postgres error',
        DATA: err
    });
}
exports.postgresError = postgresError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2VzL0NvbW1vblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseURBQStEO0FBRS9ELFNBQWdCLGVBQWUsQ0FBQyxPQUFlLEVBQUUsR0FBYTtJQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLG9DQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsT0FBTztLQUNuQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsMENBS0M7QUFFRCxTQUFnQixlQUFlLENBQUMsT0FBZSxFQUFFLEdBQWE7SUFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxvQ0FBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUxELDBDQUtDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQUMsR0FBYTtJQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLG9DQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQyxNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELHdEQU1DO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLEdBQVEsRUFBRSxHQUFhO0lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsb0NBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekQsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsR0FBRztLQUNaLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxzQ0FNQyJ9