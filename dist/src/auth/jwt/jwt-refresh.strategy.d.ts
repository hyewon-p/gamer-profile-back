import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { userService } from 'src/user/user.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: userService);
    validate(req: any, payload: any): Promise<any>;
}
export {};
