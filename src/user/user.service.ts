import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Users } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

interface user {
  username: string;
  steamKey: string;
}

@Injectable()
export class userService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async getCurrentUser(userID: number) {
    const user = await this.userRepository.findOneBy({
      id: userID,
    });
    console.log('user:', user.id);
    return user.id;
  }

  async welcomeUser(strategy: string, key: string, username?: string) {
    let user;
    let token;
    if (strategy === 'steam') {
      user = await this.userRepository.findOneBy({
        steamKey: key,
      });
      if (user) {
        token = user.refreshToken;
        return { token: token, id: user.id };
      } else {
        user = this.userRepository.create({
          steamKey: key,
          username: username,
        });
      }
    } else if (strategy === 'google') {
      user = await this.userRepository.findOneBy({
        email: key,
      });
      if (user) {
        token = user.refreshToken;
        return { token: token, id: user.id };
      } else {
        user = this.userRepository.create({
          email: key,
          username: username,
        });
      }
    }

    await this.userRepository.save(user);
    token = this.getJwtRefreshToken(user.id).refreshToken;
    await this.userRepository.update(user.id, { refreshToken: token });

    return { token: token, id: user.id };
  }

  getJwtRefreshToken(userID: number) {
    const payload = { userID: userID };
    const token =
      'Bearer ' +
      this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
        expiresIn: `${this.configService.get(
          'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
        )}s`,
      });
    return {
      refreshToken: token,
      maxAge:
        Number(this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')) *
        1000,
    };
  }

  async getAll(): Promise<Users[]> {
    return await this.userRepository.find({});
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      return;
    }
    return user;
  }
  async getUserByUserKey(steamKey: string) {
    const user = await this.userRepository.findOneBy({
      steamKey: steamKey,
    });
    return user;
  }

  async updateUserDesc(id: number, desc: string) {
    const user = await this.userRepository.update(id, {
      description: desc,
    });
    return;
  }

  async updateUser(id: number, username: string) {
    const user = await this.userRepository.update(id, {
      username,
    });
    if (!user) {
      return 'no users found';
    }
    return user;
  }

  async updateGamerType(userID: number, gamerType: string) {
    await this.userRepository.update(userID, {
      gamerType: gamerType,
    });
    return;
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.delete(id);
    if (!user) {
      return 'no users found';
    }
    return user;
  }

  async deleteUserBySteamKey(key: string) {
    const user = await this.userRepository.delete({ steamKey: key });
    if (!user) {
      return 'no users found';
    }
    return user;
  }
  psAPI = require('psn-api');
  async saveToken(userID: number, npsso: string) {
    await this.userRepository.update(userID, { psToken: npsso });
    return;
  }

  async getPSGames(userID: number) {
    const user = await this.getOne(userID);
    const token = await this.psAPI.exchangeNpssoForCode(user.psToken);
    const authorization = await this.psAPI.exchangeCodeForAccessToken(token);
    const response = await this.psAPI.getRecentlyPlayedGames(authorization);
    return response;
  }
}
