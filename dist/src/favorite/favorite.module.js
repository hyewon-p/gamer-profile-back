"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const favorite_service_1 = require("./favorite.service");
const favorite_repository_1 = require("./favorite.repository");
const favorite_controller_1 = require("./favorite.controller");
const game_module_1 = require("../game/game.module");
const user_module_1 = require("../user/user.module");
let FavoriteModule = class FavoriteModule {
};
FavoriteModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, game_module_1.GameModule, user_module_1.UserModule],
        providers: [...favorite_repository_1.favoriteRepository, favorite_service_1.favoriteService],
        controllers: [favorite_controller_1.FavoriteController],
        exports: [...favorite_repository_1.favoriteRepository, favorite_service_1.favoriteService],
    })
], FavoriteModule);
exports.FavoriteModule = FavoriteModule;
//# sourceMappingURL=favorite.module.js.map