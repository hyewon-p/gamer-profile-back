import { userService } from 'src/user/user.service';
import { authService } from './auth.service';
import { ConfigService } from '@nestjs/config';
export declare class authController {
    private authService;
    private userService;
    private configService;
    constructor(authService: authService, userService: userService, configService: ConfigService);
    steamlogin(): string;
    callback(req: any, res: any): Promise<any>;
    googleAuth(): Promise<string>;
    googleAuthCallback(req: any, res: any): Promise<{
        url: string;
    }>;
    testingGuard(req: any): void;
}
