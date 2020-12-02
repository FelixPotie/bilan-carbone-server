"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
    Environments["qa_environment"] = "qa";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }
        else if (this.environment === Environments.dev_environment) {
            return 8082;
        }
        else if (this.environment === Environments.qa_environment) {
            return 8083;
        }
        else {
            return 3000;
        }
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'db_test_project_prod';
        }
        else if (this.environment === Environments.dev_environment) {
            return 'db_test_project_dev';
        }
        else if (this.environment === Environments.qa_environment) {
            return 'db_test_project_qa';
        }
        else {
            return 'bilan_carbone_db';
        }
    }
}
exports.default = new Environment(Environments.local_environment);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vudmlyb25tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssWUFLSjtBQUxELFdBQUssWUFBWTtJQUNiLDJDQUEyQixDQUFBO0lBQzNCLHVDQUF1QixDQUFBO0lBQ3ZCLHlDQUF5QixDQUFBO0lBQ3pCLHFDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFMSSxZQUFZLEtBQVosWUFBWSxRQUtoQjtBQUVELE1BQU0sV0FBVztJQUdiLFlBQVksV0FBbUI7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLGVBQWUsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxjQUFjLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCxPQUFPLHNCQUFzQixDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxlQUFlLEVBQUU7WUFDMUQsT0FBTyxxQkFBcUIsQ0FBQztTQUNoQzthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsY0FBYyxFQUFFO1lBQ3pELE9BQU8sb0JBQW9CLENBQUM7U0FDL0I7YUFBTTtZQUNILE9BQU8sa0JBQWtCLENBQUM7U0FDN0I7SUFDTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyJ9