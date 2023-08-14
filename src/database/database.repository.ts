import { Bookmarks } from 'src/auth/bookmark/bookmark.entity';
import { FavoriteGames } from 'src/favorite/favorite.entity';
import { Games } from 'src/game/game.entity';
import { Traits } from 'src/trait/trait.entity';
import { Users } from 'src/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        port: 3306,
        // host: '127.0.0.1',
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'test',
        entities: [Users, Traits, Games, FavoriteGames, Bookmarks],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
