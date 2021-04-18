import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { QueryFailedErrorFilter } from './filter/query-failed-error.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

    // What it permit?
    app.enableCors();

    // Setup global pipe to use
    app.useGlobalPipes(new ValidationPipe({
        transform: true
    }));

    // Setup global exception filter to use
    app.useGlobalFilters(new QueryFailedErrorFilter())

    // What it permit?
    app.enableShutdownHooks();

    // API Documentation specification
    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('MOBILAN API')
        .setDescription('The MOBILAN API specification')
        .setVersion('1.0')
        .addTag('mobilan')
        .build();

    // Setup swagger API //
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    // Setup custom winston logger //
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

    const adresse = await app.listen(configService.getPort());
}

bootstrap();
