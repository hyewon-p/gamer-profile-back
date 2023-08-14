import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { profile } from 'console';
import { Strategy } from 'passport-steam';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy) {
  constructor(readonly config: ConfigService) {
    super({
      apiKey: config.get<string>('STEAM_API_KEY'),
      realm: `${config.get<string>('API_URL')}/auth/steam`,
      returnURL: `${config.get<string>('API_URL')}/auth/steam/callback`,
    });
  }

  async validate(identifier, profile, done) {
    profile.identifier = identifier;
    // const profileJson = profile._json;
    // const profileID = profileJson.steamid;
    return done(null, profile);
  }
}
