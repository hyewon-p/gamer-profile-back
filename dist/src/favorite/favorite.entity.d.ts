import { Games } from 'src/game/game.entity';
import { Users } from 'src/user/user.entity';
export declare class FavoriteGames {
    game_id: number;
    user_id: number;
    game: Games;
    user: Users;
    description: string;
}
