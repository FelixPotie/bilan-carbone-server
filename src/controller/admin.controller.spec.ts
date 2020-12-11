import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AdminService } from '../service/admin.service';
import { AdminController } from './admin.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService,{
        provide : 'UserRepository',
        useClass: Repository
      }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
