"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRepository = void 0;
const game_entity_1 = require("./game.entity");
exports.gameRepository = [
    {
        provide: 'GAME_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(game_entity_1.Games),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=game.repository.js.map