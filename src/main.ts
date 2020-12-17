import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const adresse = await app.listen(configService.getPort(),configService.getAddress());
}

bootstrap();
