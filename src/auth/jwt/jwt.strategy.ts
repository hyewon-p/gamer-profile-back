import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { steamService } from 'src/steam/steam.service';
import { userService } from 'src/user/user.service';
import { authService } from '../auth.service';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: userService,
    private readonly authService: authService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET'),
    });
  }

  async validate(payload, done) {
    console.log('validating', payload.userID, payload);
    if (payload.userID) {
      const user = await this.userService.getCurrentUser(payload.userID);
      if (user) {
        return done(null, user);
      } else {
        throw new UnauthorizedException('등록되지 않은 유저');
      }
    } else {
      throw new UnauthorizedException('올바르지 않은 접근');
    }
  }
}
