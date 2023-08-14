"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const steam_controller_1 = require("./steam/steam.controller");
const axios_1 = require("@nestjs/axios");
const steam_service_1 = require("./steam/steam.service");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const config_module_1 = require("../config.module");
const trait_controller_1 = require("./trait/trait.controller");
const trait_service_1 = require("./trait/trait.service");
const trait_module_1 = require("./trait/trait.module");
const game_controller_1 = require("./game/game.controller");
const game_service_1 = require("./game/game.service");
const game_module_1 = require("./game/game.module");
const favorite_module_1 = require("./favorite/favorite.module");
const favorite_controller_1 = require("./favorite/favorite.controller");
const favorite_service_1 = require("./favorite/favorite.service");
const bookmark_module_1 = require("./auth/bookmark/bookmark.module");
const bookmark_controller_1 = require("./auth/bookmark/bookmark.controller");
const bookmark_service_1 = require("./auth/bookmark/bookmark.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            user_module_1.UserModule,
            auth_module_1.authModule,
            config_module_1.ConfigurationModule,
            trait_module_1.TraitModule,
            game_module_1.GameModule,
            favorite_module_1.FavoriteModule,
            bookmark_module_1.BookmarkModule,
        ],
        controllers: [
            app_controller_1.AppController,
            steam_controller_1.SteamController,
            bookmark_controller_1.BookmarkController,
            trait_controller_1.TraitController,
            game_controller_1.GameController,
            favorite_controller_1.FavoriteController,
        ],
        providers: [
            app_service_1.AppService,
            steam_service_1.steamService,
            bookmark_service_1.bookmarkService,
            trait_service_1.traitService,
            game_service_1.gameService,
            favorite_service_1.favoriteService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map