import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StepService } from '../service/step.service';
import { Step } from '../model/step.entity';
import { StepController } from '../controller/step.controller';

@Module({
    providers: [StepService],
    imports: [TypeOrmModule.forFeature([Step])],
    controllers: [StepController],
})
export class StepModule {}