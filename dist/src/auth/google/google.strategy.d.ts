import { ConfigService } from '@nestjs/config';
import { Profile, Strategy } from 'passport-google-oauth20';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    readonly config: ConfigService;
    constructor(config: ConfigService);
    validate(accessToken: any, refreshToken: any, profile: Profile, done: any): Promise<any>;
}
export {};
