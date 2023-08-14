import { DataSource, Entity, Repository } from 'typeorm';
import { Games } from 'src/game/game.entity';

export const gameRepository = [
  {
    provide: 'GAME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Games),
    inject: ['DATA_SOURCE'],
  },
];
