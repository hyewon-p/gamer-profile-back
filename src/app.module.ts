import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SteamController } from './steam/steam.controller';
import { HttpModule } from '@nestjs/axios';
import { steamService } from './steam/steam.service';
import { UserModule } from './user/user.module';
import { authModule } from './auth/auth.module';
import { ConfigurationModule } from '../config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraitController } from './trait/trait.controller';
import { traitService } from './trait/trait.service';
import { TraitModule } from './trait/trait.module';
import { GameController } from './game/game.controller';
import { gameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { FavoriteModule } from './favorite/favorite.module';
import { FavoriteController } from './favorite/favorite.controller';
import { favoriteService } from './favorite/favorite.service';
import { psService } from './playstation/ps.service';
import { PSController } from './playstation/ps.controller';
import { BookmarkModule } from './auth/bookmark/bookmark.module';
import { BookmarkController } from './auth/bookmark/bookmark.controller';
import { bookmarkService } from './auth/bookmark/bookmark.service';

@Module({
  imports: [
    HttpModule,
    UserModule,
    authModule,
    ConfigurationModule,
    TraitModule,
    GameModule,
    FavoriteModule,
    BookmarkModule,
  ],
  controllers: [
    AppController,
    SteamController,
    BookmarkController,
    TraitController,
    GameController,
    FavoriteController,
  ],
  providers: [
    AppService,
    steamService,
    bookmarkService,
    traitService,
    gameService,
    favoriteService,
  ],
})
export class AppModule {}
