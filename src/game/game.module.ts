import { Module, forwardRef } from '@nestjs/common';
import { authModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { gameRepository } from 'src/game/game.repository';
import { GameController } from 'src/game/game.controller';
import { gameService } from 'src/game/game.service';
import { FavoriteModule } from 'src/favorite/favorite.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [...gameRepository, gameService],
  controllers: [GameController],
  exports: [...gameRepository, gameService],
})
export class GameModule {}
