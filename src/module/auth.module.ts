import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AdminModule } from './admin.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthUserStrategy } from '../auth/user-auth-strategy';
import { JwtUserStrategy } from '../auth/jwt-user.strategy';

@Module({
    imports: [
        AdminModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' },
          }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, AuthUserStrategy, JwtUserStrategy],
    exports: [AuthService],
})
export class AuthModule {}