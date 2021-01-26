import { Res } from "@nestjs/common";
import { Controller, Get, HttpStatus } from "@nestjs/common";
import { HealthCheckService, DNSHealthIndicator, HealthCheck, TypeOrmHealthIndicator, MemoryHealthIndicator, DiskHealthIndicator } from "@nestjs/terminus";
import { Response } from "express";
import { networkInterfaces } from "os";
import { configService } from "../config.service";

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private orm: TypeOrmHealthIndicator,
    //private memory: MemoryHealthIndicator,
    //private disk: DiskHealthIndicator,
  ) {}

  @Get('/server')
  public checkServer(@Res() res: Response) {
      return res
      .status(HttpStatus.OK)
      .json({
        status: 'ok',
        info: {
          server: {
            status: "up"
          }
        }
      });
    }


  @Get('/app')
  @HealthCheck()
  checkApp() {
    //const ips = this.getIps();
    return this.health.check([
      () => this.dns.pingCheck('app', 'http://'.concat(configService.getIp())), //manage addresse prod/test
    ]);
  }

  @Get('/portainer')
  @HealthCheck()
  checkPortainer() {
    //const ips = this.getIps();
    return this.health.check([
      () => this.dns.pingCheck('portainer', 'http://'.concat(configService.getIp(),':5016')), //manage addresse prod/test
    ]);
  }

  @Get('/database')
  @HealthCheck()
  checkDatabase() {
    return this.health.check([
      () => this.orm.pingCheck('database')
    ]);
  }

  // @Get('/memory')
  // @HealthCheck()
  // checkMemory() {
  //   return this.health.check([
  //     () => this.memory.checkHeap()
  //   ]);
  // }

  // @Get('/disk')
  // @HealthCheck()
  // checkDisk() {
  //   return this.health.check([
  //     () => this.disk.checkStorage()
  //   ]);
  // }


  /////////////// PRIVATE FUNCTION /////////////////
  private getIps() {
    const netIts = networkInterfaces();
    console.log(netIts);
    const addrs = Object.values(netIts).reduce((r: string[], list) => r.concat(list.reduce(((rr: string[], i) => { 
      if (i.family==='IPv4' && !i.internal && i.address){
        const addr: string =  i.address;
        rr.push(addr);
      }
      return rr
    }), [])), []);
    return addrs;
  }
}