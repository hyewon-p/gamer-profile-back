import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Users } from 'src/user/user.entity';
import { userService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class psService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: userService,
    private userRepository: Repository<Users>,
  ) {
    const psAPI = require('psn-api');
  }
  async saveToken(userID: number, token: string) {
    await this.userRepository.update(userID, { psToken: token });
    return;
  }
}
