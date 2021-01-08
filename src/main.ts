import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('MOBILAN API')
        .setDescription('The MOBILAN API specification')
        .setVersion('1.0')
        .addTag('mobilan')
        .build();
        
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    const adresse = await app.listen(configService.getPort());
}

bootstrap();
