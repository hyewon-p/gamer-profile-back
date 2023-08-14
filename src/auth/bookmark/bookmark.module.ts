import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { GameModule } from 'src/game/game.module';
import { UserModule } from 'src/user/user.module';
import { bookmarkRepository } from './bookmark.repository';
import { BookmarkController } from './bookmark.controller';
import { bookmarkService } from './bookmark.service';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [...bookmarkRepository, bookmarkService],
  controllers: [BookmarkController],
  exports: [...bookmarkRepository, bookmarkService],
})
export class BookmarkModule {}
