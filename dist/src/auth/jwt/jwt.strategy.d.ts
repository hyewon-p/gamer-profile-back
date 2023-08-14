import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { userService } from 'src/user/user.service';
import { authService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    private readonly authService;
    constructor(configService: ConfigService, userService: userService, authService: authService);
    validate(payload: any, done: any): Promise<any>;
}
export {};
