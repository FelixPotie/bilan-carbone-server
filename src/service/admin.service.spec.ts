import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AdminService } from './admin.service';

describe('UsersService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService]
    }).compile();

    service = await module.resolve(AdminService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
