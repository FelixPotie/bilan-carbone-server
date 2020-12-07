import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,{
        provide : 'UserRepository',
        useClass: Repository
      }]
    }).compile();

    service = await module.resolve(UsersService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
