import {
  Controller,
  Post,
  Query,
  Param,
  UseGuards,
  UseFilters,
  Req,
  Get,
} from '@nestjs/common';
import { AuthExceptionFilter } from 'src/auth/authException.filter';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { steamService } from './steam.service';

@Controller('steam')
export class SteamController {
  constructor(private steamService: steamService) {}

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/profile')
  async profile(@Req() req) {
    const userID = req.user;
    console.log('key:', userID);
    const profile = await this.steamService.getUserProfileByID(userID);
    return profile;
  }

  // @UseGuards(JwtAuthGuard)
  // @UseFilters(AuthExceptionFilter)
  @Post('/profile/:id')
  async profileByID(@Param('id') id: number) {
    const profile = await this.steamService.getUserProfileByID(id);
    return profile;
  }

  // @Post('/:id')
  // getUser(@Param('id') id: string) {
  //   return this.steamService.getUser(id);
  // }
}
