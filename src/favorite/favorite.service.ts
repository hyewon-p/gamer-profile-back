import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Users } from 'src/user/user.entity';
import { Games } from 'src/game/game.entity';
import { FavoriteGames } from './favorite.entity';

@Injectable()
export class favoriteService {
  constructor(
    @Inject('FAVORITE_REPOSITORY')
    private favoriteRepository: Repository<FavoriteGames>,
  ) {}

  async getDescByGameID(id: number) {
    const games = await this.favoriteRepository.find({
      where: {
        game_id: id,
      },
    });

    return games;
  }

  async getAll() {
    const games = await this.favoriteRepository.find({});
    return games;
  }

  async getDescByUserID(id: number) {
    const games = await this.favoriteRepository.find({
      relations: ['game'],
      where: {
        user_id: id,
      },
    });
    return games;
  }

  async addNewGame(userID, body) {
    const { gameID, description } = body;
    const game = this.favoriteRepository.create({
      user_id: userID,
      game_id: gameID,
      description,
    });
    await this.favoriteRepository.save(game);
    return;
  }

  async deleteGame(userID, gameID) {
    const game = await this.favoriteRepository.delete({
      user_id: userID,
      game_id: gameID,
    });
    return;
  }

  async updateGame(userID, body) {
    const { gameID, description } = body;
    await this.favoriteRepository.update(
      { game_id: gameID, user_id: userID },
      {
        description,
      },
    );
    // this.favoriteRepository.save(game);
    return;
  }
}
