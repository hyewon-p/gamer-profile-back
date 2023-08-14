import { Bookmarks } from 'src/auth/bookmark/bookmark.entity';
import { FavoriteGames } from 'src/favorite/favorite.entity';
import { Traits } from 'src/trait/trait.entity';
export declare class Users {
    id: number;
    username: string;
    steamKey: string;
    psToken: string;
    description: string;
    gamerType: string;
    refreshToken?: string;
    email: string;
    traits: Traits[];
    favorite: FavoriteGames[];
    bookmarks: Bookmarks[];
}
