import { Injectable, Dependencies, UseGuards, Req } from '@nestjs/common';
import { HttpService, HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { userService } from 'src/user/user.service';

@Injectable()
export class steamService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly userService: userService,
  ) {}

  private readonly STEAM_KEY = this.configService.get('STEAM_API_KEY');
  SteamAPI = require('steamapi');
  private steam = new this.SteamAPI(this.STEAM_KEY);

  async getAppList(id: string) {
    const userApp = await this.steam.getUserOwnedGames(id);
    return userApp;
  }

  async getUserProfile(steamKey: string) {
    console.log('getting profile of', steamKey);
    const data = await Promise.all([
      this.steam.getUserSummary(steamKey),
      this.steam.getUserOwnedGames(steamKey),
    ]);
    return { profile: data[0], appList: data[1] };
  }

  async getUserProfileByID(id: number) {
    const user = await this.userService.getOne(id);
    const data = await Promise.all([
      this.steam.getUserSummary(user.steamKey),
      this.steam.getUserOwnedGames(user.steamKey),
    ]);
    return {
      description: user.description,
      profile: data[0],
      appList: data[1],
    };
  }
}
