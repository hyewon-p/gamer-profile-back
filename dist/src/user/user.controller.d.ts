import { userService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: userService);
    getAll(): Promise<import("./user.entity").Users[]>;
    getOne(id: number): Promise<import("./user.entity").Users>;
    updateUserDesc(req: any, body: any): void;
    getCurrentUser(req: any): Promise<import("./user.entity").Users>;
    deleteUser(id: number): Promise<"no users found" | import("typeorm").DeleteResult>;
    updateUsername(req: any, body: any): Promise<import("typeorm").UpdateResult | "no users found">;
    deleteUserBySteamKey(key: string): Promise<"no users found" | import("typeorm").DeleteResult>;
    updateGamerType(req: any, body: any): Promise<void>;
    saveToken(req: any, body: any): Promise<void>;
    getPSProfile(req: any): Promise<any>;
}
