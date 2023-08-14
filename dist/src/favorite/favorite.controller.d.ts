import { favoriteService } from './favorite.service';
export declare class FavoriteController {
    private favoriteService;
    constructor(favoriteService: favoriteService);
    getAll(): Promise<import("./favorite.entity").FavoriteGames[]>;
    getDescByGameID(id: number): Promise<import("./favorite.entity").FavoriteGames[]>;
    getDescByUserID(id: number): Promise<import("./favorite.entity").FavoriteGames[]>;
    addNewGame(req: any, body: any): Promise<void>;
    deleteGame(req: any, id: number): Promise<void>;
    updateGame(req: any, body: any): Promise<void>;
}
