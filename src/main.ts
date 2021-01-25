import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { QueryFailedErrorFilter } from './filter/query-failed-error.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe({
        transform: true
    }));
    app.useGlobalFilters(new QueryFailedErrorFilter())
    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('MOBILAN API')
        .setDescription('The MOBILAN API specification')
        .setVersion('1.0')
        .addTag('mobilan')
        .build();
    
    app.enableShutdownHooks();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    const adresse = await app.listen(configService.getPort());
}

bootstrap();
