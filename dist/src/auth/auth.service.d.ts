import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class authService {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    getJwtAccessToken(userID: number): {
        accessToken: string;
        domain: string;
        path: string;
        httpOnly: boolean;
        secure: boolean;
        maxAge: number;
    };
}
