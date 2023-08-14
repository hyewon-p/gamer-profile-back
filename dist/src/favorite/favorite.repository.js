"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteRepository = void 0;
const favorite_entity_1 = require("./favorite.entity");
exports.favoriteRepository = [
    {
        provide: 'FAVORITE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(favorite_entity_1.FavoriteGames),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=favorite.repository.js.map