import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { steamService } from 'src/steam/steam.service';
import { UserModule } from 'src/user/user.module';
import { userService } from 'src/user/user.service';
import { authController } from './auth.controller';
import { authService } from './auth.service';
import { JwtRefreshStrategy } from './jwt-refresh/jwt-refresh.strategy';
import { JwtStrategy } from './jwt/jwt.strategy';
import { SteamStrategy } from './steam.strategy';
import { GoogleStrategy } from './google/google.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
  ],
  providers: [
    SteamStrategy,
    JwtStrategy,
    authService,
    JwtRefreshStrategy,
    userService,
    GoogleStrategy,
  ],
  controllers: [authController],
  exports: [authService],
})
export class authModule {}
