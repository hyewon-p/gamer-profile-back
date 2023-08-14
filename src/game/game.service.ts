import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Users } from 'src/user/user.entity';
import { Games } from 'src/game/game.entity';

@Injectable()
export class gameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Games>,
  ) {}

  async getAllGamesByUserID(id: number) {
    const games = await this.gameRepository.find({
      where: {
        userID: id,
      },
    });

    return games;
  }

  async getAll() {
    const games = await this.gameRepository.find({});
    return games;
  }

  async addNewGame(userID, body) {
    const { image, gameID, title, platform, playtime } = body;
    const game = this.gameRepository.create({
      userID,
      gameID,
      image,
      title,
      platform,
      playtime,
    });
    await this.gameRepository.save(game);
    return;
  }

  async updateGame(userID, body) {
    const { gameID, playtime } = body;
    await this.gameRepository.update(
      { gameID: gameID, userID: userID },
      { playtime },
    );
    return;
  }

  async deleteGame(userID, gameID) {
    await this.gameRepository.delete({ gameID: gameID, userID: userID });
    return;
  }
}
