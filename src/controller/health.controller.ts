import { Controller, Get } from "@nestjs/common";
import { HealthCheckService, DNSHealthIndicator, HealthCheck, TypeOrmHealthIndicator } from "@nestjs/terminus";

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private orm: TypeOrmHealthIndicator

  ) {}

  @Get('/app')
  @HealthCheck()
  checkApp() {
    return this.health.check([
      () => this.dns.pingCheck('app', 'http://localhost:5010/'), //manage addresse prod/test
    ]);
  }

  @Get('/portainer')
  @HealthCheck()
  checkPortainer() {
    return this.health.check([
      () => this.dns.pingCheck('portainer', 'http://localhost:5016/'), //manage addresse prod/test
    ]);
  }

  @Get('/database')
  @HealthCheck()
  checkDatabase() {
    return this.health.check([
      () => this.orm.pingCheck('database')
    ]);
  }
}