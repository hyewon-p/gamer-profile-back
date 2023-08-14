import { Users } from 'src/user/user.entity';
import { FavoriteGames } from 'src/favorite/favorite.entity';
export declare class Games {
    id: number;
    userID: number;
    user: Users;
    gameID: string | null;
    title: string;
    image: string | null;
    platform: string | null;
    playtime: number;
    favorite: FavoriteGames;
}
