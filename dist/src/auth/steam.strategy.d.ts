import { ConfigService } from '@nestjs/config';
declare const SteamStrategy_base: new (...args: any[]) => any;
export declare class SteamStrategy extends SteamStrategy_base {
    readonly config: ConfigService;
    constructor(config: ConfigService);
    validate(identifier: any, profile: any, done: any): Promise<any>;
}
export {};
