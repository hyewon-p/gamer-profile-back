import { gameService } from 'src/game/game.service';
export declare class GameController {
    private gameService;
    constructor(gameService: gameService);
    getAll(): Promise<import("./game.entity").Games[]>;
    getTraitsByUserID(id: number): Promise<import("./game.entity").Games[]>;
    addNewGame(req: any, body: any): Promise<void>;
    updateGame(req: any, id: any): Promise<void>;
    deleteGame(req: any, id: any): Promise<void>;
}
