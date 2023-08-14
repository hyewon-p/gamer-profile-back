import { steamService } from './steam.service';
export declare class SteamController {
    private steamService;
    constructor(steamService: steamService);
    profile(req: any): Promise<{
        description: string;
        profile: any;
        appList: any;
    }>;
    profileByID(id: number): Promise<{
        description: string;
        profile: any;
        appList: any;
    }>;
}
