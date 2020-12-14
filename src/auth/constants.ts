import { configService } from '../config.service';

export const jwtConstants = {
    secret: configService.getScretKey(),
  };