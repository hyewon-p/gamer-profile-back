import { DataSource, Repository } from 'typeorm';
import { FavoriteGames } from './favorite.entity';
export declare const favoriteRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<FavoriteGames>;
    inject: string[];
}[];
