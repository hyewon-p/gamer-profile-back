import { Repository } from 'typeorm';
import { Games } from 'src/game/game.entity';
export declare class gameService {
    private gameRepository;
    constructor(gameRepository: Repository<Games>);
    getAllGamesByUserID(id: number): Promise<Games[]>;
    getAll(): Promise<Games[]>;
    addNewGame(userID: any, body: any): Promise<void>;
    updateGame(userID: any, body: any): Promise<void>;
    deleteGame(userID: any, gameID: any): Promise<void>;
}
