import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { DatabaseModule } from './database/database.module';
import { UsersService } from './user/users.service';
import { UsersController } from './user/users.controller';

@Module({
  imports: [UsersModule, DatabaseModule],
  providers: [AppService, UsersService],
  controllers: [AppController, UsersController],
})
export class AppModule {}
