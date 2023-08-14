import { Repository } from 'typeorm';
import { FavoriteGames } from './favorite.entity';
export declare class favoriteService {
    private favoriteRepository;
    constructor(favoriteRepository: Repository<FavoriteGames>);
    getDescByGameID(id: number): Promise<FavoriteGames[]>;
    getAll(): Promise<FavoriteGames[]>;
    getDescByUserID(id: number): Promise<FavoriteGames[]>;
    addNewGame(userID: any, body: any): Promise<void>;
    deleteGame(userID: any, gameID: any): Promise<void>;
    updateGame(userID: any, body: any): Promise<void>;
}
