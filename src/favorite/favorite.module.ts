import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { favoriteService } from './favorite.service';
import { favoriteRepository } from './favorite.repository';
import { FavoriteController } from './favorite.controller';
import { GameModule } from 'src/game/game.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DatabaseModule, GameModule, UserModule],
  providers: [...favoriteRepository, favoriteService],
  controllers: [FavoriteController],
  exports: [...favoriteRepository, favoriteService],
})
export class FavoriteModule {}
