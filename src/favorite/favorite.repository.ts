import { DataSource, Entity, Repository } from 'typeorm';
import { Games } from 'src/game/game.entity';
import { FavoriteGames } from './favorite.entity';

export const favoriteRepository = [
  {
    provide: 'FAVORITE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FavoriteGames),
    inject: ['DATA_SOURCE'],
  },
];
