import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../service/app.service';
import { AuthService } from '../service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from '../service/admin.service';
import { Repository } from 'typeorm';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../auth/constants';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' },
          }),

      ],
      controllers: [AppController],
      providers: [AppService,AuthService,AdminService,{
        provide : 'AdminRepository',
        useClass: Repository
      }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
