"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const bookmark_entity_1 = require("../auth/bookmark/bookmark.entity");
const favorite_entity_1 = require("../favorite/favorite.entity");
const game_entity_1 = require("../game/game.entity");
const trait_entity_1 = require("../trait/trait.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                port: 3306,
                host: '127.0.0.1',
                username: 'hyewon',
                password: 'hyewon3817',
                database: 'test',
                entities: [user_entity_1.Users, trait_entity_1.Traits, game_entity_1.Games, favorite_entity_1.FavoriteGames, bookmark_entity_1.Bookmarks],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.repository.js.map