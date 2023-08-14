import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(readonly config: ConfigService) {
    super({
      clientID: config.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: config.get<string>('GOOGLE_SECRET'),
      callbackURL: `${config.get<string>('API_URL')}/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken, refreshToken, profile: Profile, done) {
    const { id, name, emails } = profile;

    return done(null, {
      provider: 'google',
      providerId: id,
      name: name.givenName,
      email: emails[0].value,
    });
  }
}
