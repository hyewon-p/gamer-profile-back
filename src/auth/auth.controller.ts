import {
  Controller,
  Get,
  Redirect,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import passport_steam from 'passport-steam';
import { userService } from 'src/user/user.service';
import { SteamAuthGuard } from './auth.guard';
import { authService } from './auth.service';
import { AuthExceptionFilter } from './authException.filter';
import { JwtRefreshGuard } from './jwt-refresh/jwt-refresh.guard';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class authController {
  constructor(
    private authService: authService,
    private userService: userService,
    private configService: ConfigService,
  ) {}

  @UseGuards(SteamAuthGuard)
  @Get('/steam')
  steamlogin() {
    return 'steam';
  }
  @UseGuards(SteamAuthGuard)
  @Get('/steam/callback')
  @Redirect()
  async callback(@Req() req, @Res() res): Promise<any> {
    const user = await req.user._json;
    const userInfo = await this.userService.welcomeUser(
      'steam',
      user.steamid,
      user.personaname,
    );
    res.setHeader('Authorization', userInfo.token);
    res.setHeader(
      'Access-Control-Allow-Origin',
      this.configService.get<string>('BASE_URL'),
    );
    return {
      url: `${this.configService.get<string>('BASE_URL')}/api/user?token=${
        userInfo.token
      }&id=${userInfo.id}`,
    };
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return 'google';
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  @Redirect()
  async googleAuthCallback(@Req() req, @Res() res) {
    const { user } = req;
    const { token, id } = await this.userService.welcomeUser(
      'google',
      user.email,
      user.name,
    );
    res.setHeader('Authorization', token);
    res.setHeader(
      'Access-Control-Allow-Origin',
      this.configService.get<string>('BASE_URL'),
    );

    // const { id } = await this.userService.getUserByUserKey(user.steamid);
    // res.cookie('User', id);
    return {
      url: `${this.configService.get<string>(
        'BASE_URL',
      )}/api/user?token=${token}&id=${id}`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/test')
  @UseFilters(AuthExceptionFilter)
  testingGuard(@Req() req) {
    console.log('testing guard passed', req);
  }
}
