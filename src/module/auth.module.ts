import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AdminModule } from './admin.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../local.strategy';

@Module({
    imports: [AdminModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}