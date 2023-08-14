import { Users } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class userService {
    private userRepository;
    private jwtService;
    private configService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService, configService: ConfigService);
    getCurrentUser(userID: number): Promise<number>;
    welcomeUser(strategy: string, key: string, username?: string): Promise<{
        token: any;
        id: any;
    }>;
    getJwtRefreshToken(userID: number): {
        refreshToken: string;
        maxAge: number;
    };
    getAll(): Promise<Users[]>;
    getOne(id: number): Promise<Users>;
    getUserByUserKey(steamKey: string): Promise<Users>;
    updateUserDesc(id: number, desc: string): Promise<void>;
    updateUser(id: number, username: string): Promise<import("typeorm").UpdateResult | "no users found">;
    updateGamerType(userID: number, gamerType: string): Promise<void>;
    deleteUser(id: number): Promise<"no users found" | import("typeorm").DeleteResult>;
    deleteUserBySteamKey(key: string): Promise<"no users found" | import("typeorm").DeleteResult>;
    psAPI: any;
    saveToken(userID: number, npsso: string): Promise<void>;
    getPSGames(userID: number): Promise<any>;
}
