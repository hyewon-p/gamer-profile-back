import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class authService {
  constructor(
    @Inject('USER_REPOSITORY')
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  getJwtAccessToken(userID: number) {
    const payload = { userID: userID };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${this.configService.get(
        'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
      )}s`,
    });
    return {
      accessToken: token,
      domain: process.env.BASE_URL,
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge:
        Number(this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')) *
        1000,
    };
  }
}
