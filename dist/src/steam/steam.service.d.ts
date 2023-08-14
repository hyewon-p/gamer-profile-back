import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { userService } from 'src/user/user.service';
export declare class steamService {
    private readonly httpService;
    private readonly configService;
    private readonly userService;
    constructor(httpService: HttpService, configService: ConfigService, userService: userService);
    private readonly STEAM_KEY;
    SteamAPI: any;
    private steam;
    getAppList(id: string): Promise<any>;
    getUserProfile(steamKey: string): Promise<{
        profile: any;
        appList: any;
    }>;
    getUserProfileByID(id: number): Promise<{
        description: string;
        profile: any;
        appList: any;
    }>;
}
