import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Users } from 'src/user/user.entity';
import { Bookmarks } from './bookmark.entity';

@Injectable()
export class bookmarkService {
  constructor(
    @Inject('BOOKMARK_REPOSITORY')
    private bookmarkRepository: Repository<Bookmarks>,
  ) {}

  async getBookmarkList(id) {
    const bookmarkList = await this.bookmarkRepository.find({
      select: { profile_id: true, user: { username: true } },
      where: { owner_id: id },
      relations: ['user'],
    });

    return bookmarkList;
  }

  async addToBookmark(ownerID, profileID) {
    const request = this.bookmarkRepository.create({
      owner_id: ownerID,
      profile_id: profileID,
    });
    this.bookmarkRepository.save(request);
  }

  async deleteFromBookmark(ownerID, profileID) {
    const request = this.bookmarkRepository.delete({
      owner_id: ownerID,
      profile_id: profileID,
    });
    return;
  }
}
